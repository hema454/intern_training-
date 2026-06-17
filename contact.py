contacts = {}

def add_contacts():
      name = input("Name: ")
      phone = input("Phone: ")
      contacts[name] = phone
      print("contact added successfully")
def search_contacts():
    details = input("Enter name: ")
    try:
       if details in contacts:
         print(f"Name: {details}")
         print(f"Phone: {contacts[details]}")
       else:
           raise missing_contact
    except Exception as missing_contact:
        print(missing_contact)
        print("contact not found")

def show_contacts():
    if contacts:
        for name, phone in contacts.items():
            print(f"Name: {name}")
            print(f"Phone: {phone}")
    else:
        print("No contacts found")

def delete_contacts():
    deleted = input("Enter contact name to delete: ")

    if deleted in contacts:
        del contacts[deleted]
        print("Contact deleted successfully")
    else:
        print("Contact not found")

