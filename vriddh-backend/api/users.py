from fastapi import APIRouter

router = APIRouter()

@router.get("/users/me")
def get_current_user():
    return {"message": "User profile endpoint (to be implemented)"}
