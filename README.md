# SpectrumCue


# Project Setup

## Prerequisites

- **Python** (for the backend)
- **Node.js and npm** (for the frontend)

## Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Create a Virtual Environment:**

   ```bash
   python -m venv venv
   ```

3. **Activate the Virtual Environment:**

   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On PowerShell:
     ```bash
     venv/bin/activate.ps1
     ```

4. **Install Required Packages:**

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the FastAPI App:**

   ```bash
   uvicorn main:app --reload
   ```

   This command will start the FastAPI server in development mode, typically accessible at `http://127.0.0.1:8000`.

## Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   This command will start the frontend server, usually accessible at `http://localhost:3000` (or another specified port).

---
