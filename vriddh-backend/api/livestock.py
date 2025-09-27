from fastapi import APIRouter

router = APIRouter()

@router.get("/livestock")
def list_livestock():
    return {"message": "List livestock endpoint (to be implemented)"}
