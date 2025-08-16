import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from .env file
load_dotenv()

# Configure the Gemini API
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("No GEMINI_API_KEY found in environment variables.")
genai.configure(api_key=api_key)

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Load Agent Prompts ---
def load_prompts():
    # Correctly locate the shared directory relative to the current file
    script_dir = os.path.dirname(__file__)
    prompts_path = os.path.join(script_dir, '..', 'shared', 'prompts.json')
    with open(prompts_path, 'r') as f:
        return json.load(f)

AGENT_SYSTEM_PROMPTS = load_prompts()

class TaskRequest(BaseModel):
    task: str
    agent_name: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the AIZA AI Platform Backend (Gemini Edition)"}

agents_data = [
  { "name": "Code Agent", "description": "Generates boilerplate code, debugs, and writes scripts.", "icon": "FaCode" },
  { "name": "Study Agent", "description": "Explains complex topics, summarizes chapters, and helps with learning.", "icon": "FaBook" },
  { "name": "Business Agent", "description": "Performs market analysis, generates reports, and provides insights.", "icon": "FaBriefcase" },
  { "name": "Design Agent", "description": "Generates modern UI components and suggests design improvements.", "icon": "FaPaintBrush" },
  { "name": "Cyber Agent", "description": "Monitors network traffic and detects suspicious activities.", "icon": "FaShieldAlt" },
]

@app.get("/api/agents")
def get_agents():
    return agents_data

@app.post("/api/execute-task")
async def execute_task(request: TaskRequest):
    system_prompt = AGENT_SYSTEM_PROMPTS.get(request.agent_name, AGENT_SYSTEM_PROMPTS["Default"])
    full_prompt = f"{system_prompt}\n\nUser Task: {request.task}"
    
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(full_prompt)
        
        if response.text:
            result = response.text
        else:
            feedback = getattr(response, 'prompt_feedback', 'No feedback available.')
            result = f"Content blocked or no result returned. Safety Feedback: {feedback}"

        return {"status": "completed", "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
