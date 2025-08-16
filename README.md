# AIZA AI Platform - Server

This directory contains the backend application for the AIZA AI Platform, built with [FastAPI](https://fastapi.tiangolo.com/).

## Features

-   **Framework**: [FastAPI](https://fastapi.tiangolo.com/)
-   **AI Integration**: Uses the [Google Generative AI (Gemini)](https://ai.google.dev/) library to power the agents.
-   **Dependency Management**: Uses [uv](https://github.com/astral-sh/uv) for fast dependency management.
-   **Configuration**: Loads API keys and other secrets from a `.env` file.
-   **Shared Prompts**: Agent system prompts are loaded from the `/shared` directory, separating configuration from code.

## API Endpoints

-   `GET /`: Root endpoint with a welcome message.
-   `GET /api/agents`: Returns a list of all available agents.
-   `POST /api/execute-task`: Accepts a task and an agent name, processes it with the Gemini API, and returns the result.

## Getting Started

### Prerequisites

-   [Python](https://www.python.org/) (version 3.12 or higher)
-   [uv](https://github.com/astral-sh/uv) (Python package installer)

### Installation

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install the dependencies using `uv`:
    ```bash
    uv pip install -e .
    ```

### Configuration

1.  You will find a `.env` file in this directory.
2.  You must add your Google AI Studio API key to this file:
    ```env
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```

### Running the Server

1.  Run the following command:
    ```bash
    uvicorn main:app --reload
    ```
2.  The server will start on `http://127.0.0.1:8000`. The `--reload` flag will automatically restart the server when you make changes to the code.
