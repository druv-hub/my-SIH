from fastapi import APIRouter

router = APIRouter()

@router.get("/recommendations")
def list_recommendations():
    return {"message": "List recommendations endpoint (to be implemented)"}
