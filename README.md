# AIZA AI Platform

Welcome to the AIZA AI Platform, a multi-framework AI Agents Hub where users can submit tasks and the platform intelligently decides which AI Agent and framework to use.

## 🌐 Overview

This project is a full-stack application featuring a Next.js frontend and a Python (FastAPI) backend. It's designed to be a central hub for various specialized AI agents that can perform tasks like coding, studying, business analysis, and more.

## ✨ Core Features

-   **Agent Control Center:** A modern dashboard built with Next.js and Tailwind CSS to manage and interact with AI agents.
-   **Interactive 3D Globe:** A `three.js` visualization of the available agents.
-   **Specialized AI Agents:** Backend powered by FastAPI and Google's Gemini AI, with unique prompts for each agent's role.
-   **Dynamic Frontend:** The frontend is fully connected to the backend API to fetch data and execute tasks.
-   **Task History:** Users can see a history of their submitted tasks and the results.

## 🚀 Getting Started

To run this project, you need to start both the backend and the frontend servers.

### Backend Setup (FastAPI)

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```
2.  **Install dependencies using uv:**
    ```bash
    uv pip install -e .
    ```
3.  **Add your API Key:**
    -   Rename `.env.example` to `.env`.
    -   Add your `GEMINI_API_KEY` to the `.env` file.
4.  **Run the server:**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be available at `http://127.0.0.1:8000`.

### Frontend Setup (Next.js)

1.  **Navigate to the client directory:**
    ```bash
    cd client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:3000`.

## 📂 Project Structure

-   `/client`: Contains the Next.js frontend application.
-   `/server`: Contains the FastAPI backend application.
-   `/shared`: Contains shared resources, like prompts, that can be used by both client and server.
