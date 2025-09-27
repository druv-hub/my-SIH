from fastapi import APIRouter

router = APIRouter()

@router.get("/crops")
def list_crops():
    return {"message": "List crops endpoint (to be implemented)"}
