🚀 BeyondChats 

📌 Overview

This repository contains my BeyondChats technical project.

The objective of this project was to design and implement a small end-to-end system involving backend APIs, article processing, and a frontend UI within a limited time frame.

Partial completion of certain components is intentional, with the focus on demonstrating system design, data flow, and integration rather than full production-ready features. 

🎯 Project Goal

The goal of this project was to:

Design backend APIs for article management

Implement a structured article processing workflow

Build a frontend UI to display original and updated articles

Demonstrate clean architecture, data flow, and system integration 

🧩 System Breakdown

The project is divided into three logical components:

Backend APIs – Manage articles and expose CRUD operations

NodeJS Processor – Fetch, process, and update articles

Frontend UI – Display original and processed articles 

🛠 Tech Stack

Backend: Python (FastAPI)

Database: SQLite / PostgreSQL

Article Processing: NodeJS

Frontend: ReactJS

Version Control: Git & GitHub  

Backend Implementation Note

The backend for this project has been implemented using Python (FastAPI).

This technology choice was made to ensure faster development, clean API design, and reliable performance within the given time frame.

Using Python + FastAPI allowed me to:

Deliver fully functional CRUD APIs

Maintain clean, readable, and well-structured API contracts

Focus on system design and data flow

Complete the project efficiently within time constraints 

📂 Project Structure 
beyondchats-assignment/
│
├── backend/               # FastAPI backend (CRUD APIs)
│
├── node-processor/        # NodeJS article processing logic
│
├── frontend/              # ReactJS frontend
│
└── README.md              # Project documentation

 ✨ Application Features
Phase 1 – Backend APIs 

Scraped and stored blog articles in the database

CRUD APIs for managing articles

API to fetch latest articles

Support for both original and processed articles

Phase 2 – Article Processing 

NodeJS project structure created

Logic to fetch latest articles from backend APIs

Placeholder and documented logic for:

Google search

Content scraping

LLM-based content transformation

Due to time constraints, external scraping and LLM integrations are demonstrated through project structure and documented logic rather than full production implementations.

Phase 3 – Frontend 

ReactJS frontend to display articles

Displays both original and updated articles

Clean, responsive, and user-friendly UI 

🔄 Data Flow / Architecture 
BeyondChats Blog
        ↓
Backend APIs (FastAPI)
        ↓
Database (Articles)
        ↓
NodeJS Processor
        ↓
Updated Article Stored via API
        ↓
React Frontend UI

Local Setup Instructions- 
Backend (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload 

NodeJS Processor
cd node-processor
npm install
node index.js

Frontend (ReactJS)
cd frontend
npm install 
npm start

👨‍💻 Author

Aditya Tiwari
Aspiring Full Stack & GenAI Developer 
