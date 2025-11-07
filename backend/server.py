from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()

# Connect to MongoDB
client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()

# Allow all origins for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Contact form model
class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Submit contact form
@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    contact_data = {
        "name": form.name,
        "email": form.email,
        "subject": form.subject,
        "message": form.message
    }
    await db.contacts.insert_one(contact_data)
    return {"status": "success", "message": "Message sent!"}

# Get all contacts
@app.get("/api/contact")
async def get_contacts():
    contacts = []
    async for contact in db.contacts.find({}, {"_id": 0}):
        contacts.append(contact)
    return contacts