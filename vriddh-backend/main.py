from fastapi import FastAPI
from dotenv import load_dotenv
import os


load_dotenv()

from api import auth, users, farms, livestock, crops, recommendations, financial

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(farms.router, prefix="/farms", tags=["farms"])
app.include_router(livestock.router, prefix="/livestock", tags=["livestock"])
app.include_router(crops.router, prefix="/crops", tags=["crops"])
app.include_router(recommendations.router, prefix="/recommendations", tags=["recommendations"])
app.include_router(financial.router, prefix="/financial", tags=["financial"])

@app.get("/")
def root():
    return {"message": "Vriddhi Backend API is running."}

# Start the server if run as a script (for Render deployment)
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 10000))
    uvicorn.run(app, host="0.0.0.0", port=port)
