# AIZA AI Platform - Client

This directory contains the frontend application for the AIZA AI Platform, built with [Next.js](https://nextjs.org/).

## Features

-   **Framework**: [Next.js](https://nextjs.org/) 15 with App Router
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: Custom, reusable components for the dashboard, agent cards, etc.
-   **3D Visualization**: Interactive globe using [Three.js](https://threejs.org/) and [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction).
-   **Animations**: Smooth UI animations powered by [Framer Motion](https://www.framer.com/motion/).
-   **Dynamic Data**: Fetches data from and sends tasks to the backend API.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (version 18 or higher)
-   `npm` or `yarn`

### Installation

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Make sure the backend server is running first (see the root `README.md`).
2.  Run the following command:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Lints the codebase.

## Project Structure

-   `src/app`: Contains the pages of the application, following the Next.js App Router structure.
-   `src/components`: Contains all the reusable React components.
-   `src/public`: Contains static assets like images and icons.
