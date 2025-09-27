from fastapi import APIRouter

router = APIRouter()

@router.get("/farms")
def list_farms():
    return {"message": "List farms endpoint (to be implemented)"}
