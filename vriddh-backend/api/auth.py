from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from supabase_client import supabase

router = APIRouter()

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    name: str
    phone: str

@router.post("/register")
def register(user: UserRegister):
    # Register user with Supabase Auth
    result = supabase.auth.sign_up({"email": user.email, "password": user.password})
    if result.get("error"):
        raise HTTPException(status_code=400, detail=result["error"]["message"])
    return {"message": "User registered. Please verify your email."}
