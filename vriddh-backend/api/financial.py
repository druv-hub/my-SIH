from fastapi import APIRouter

router = APIRouter()

@router.get("/financial")
def get_financials():
    return {"message": "Financial planning endpoint (to be implemented)"}
