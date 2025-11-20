# Mono Repo Structure for Mumbai Marathon Banner App
# This is a two-tier application:
# - Backend: Python (Flask) serving dynamic team names via API.
# - Frontend: Node.js (React) fetching team names and displaying scrolling banners.
# Run with Docker: Build and run backend/frontend separately or use docker-compose (included).
# Assumptions:
# - Backend runs on port 5000, serves /api/teams with JSON list of teams.
# - Frontend runs on port 3000, fetches from backend, displays animated banners.
# - Teams are hardcoded in backend for demo; make dynamic at runtime (e.g., via env vars or DB).
# - For runtime variability: Backend can read from env var or param; here, simple list.

# To run locally:
# Backend: cd backend && pip install -r requirements.txt && python app.py
# Frontend: cd frontend && npm install && npm start
# Docker: docker-compose up

# Root files
