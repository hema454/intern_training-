from fastapi import FastAPI
app = FastAPI()

contacts = {}


# Home endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to Contact Book API"
    }


# Add contact
@app.post("/contacts")
def add_contact(name: str, phone: str):
    contacts[name] = phone

    return {
        "message": "Contact added successfully",
        "name": name,
        "phone": phone
    }


# Search contact
@app.get("/contacts/{name}")
def search_contact(name: str):

    if name in contacts:
        return {
            "name": name,
            "phone": contacts[name]
        }

    raise HTTPException(
        status_code=404,
        detail="Contact not found"
    )


# Show all contacts
@app.get("/contacts")
def show_contacts():

    if contacts:
        return contacts

    return {
        "message": "No contacts available"
    }


# Delete contact
@app.delete("/contacts/{name}")
def delete_contact(name: str):

    if name in contacts:
        del contacts[name]

        return {
            "message": "Contact deleted successfully"
        }

    raise HTTPException(
        status_code=404,
        detail="Contact not found"
    )