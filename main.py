from contact import add_contacts,search_contacts,show_contacts,delete_contacts
from todolist import add_task,remove_task,show_task,task_status

print("1.contact")
print("2.todolist")
choice=int(input("enter choice"))

if choice == 1:

    while True:
        print("1. Add Contact")
        print("2. Search Contact")
        print("3. Show Contacts")
        print("4. Delete Contact")
        print("5. Back")

        c = int(input("Enter choice: "))

        if c == 1:
            add_contacts()
        elif c == 2:
            search_contacts()
        elif c == 3:
            show_contacts()
        elif c == 4:
            delete_contacts()
        elif c == 5:
            break

elif choice == 2:

    while True:
        print("1. Add Task")
        print("2. Remove Task")
        print("3. Show Task")
        print("4. Task Status")
        print("5. Back")

        t = int(input("Enter choice: "))

        if t == 1:
            add_task()
        elif t == 2:
            remove_task()
        elif t == 3:
            show_task()
        elif t == 4:
            task_status()
        elif t == 5:
            break


try:
    from hema import profile
except ModuleNotFoundError as e:
    print(e)

    
       