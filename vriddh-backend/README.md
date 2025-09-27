# Vriddhi Backend

This is the backend for the Vriddhi Smart Crop Advisory System, built with FastAPI, MySQL, and Supabase integration.

## Features
- JWT authentication (Supabase Auth)
- User, farm, livestock, crop, recommendation, and financial plan management
- AI/ML endpoints for soil, crop, and yield prediction
- Weather, market, and government API integrations
- Secure, scalable, and ready for deployment

## Setup Instructions

1. **Clone the repository and navigate to this folder**
2. **Create a virtual environment:**
   ```sh
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```
3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your secrets
5. **Run the server:**
   ```sh
   uvicorn main:app --reload
   ```

## Deployment
- Docker-ready
- Can be deployed to Railway, Render, or any VPS

---

See BACKEND_REQUIREMENTS.md for full requirements.
