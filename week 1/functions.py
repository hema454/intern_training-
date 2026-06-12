print("1.contact book")
print("2.to-do-list")

choice=int(input('enter here:'))

if choice==1:
  contacts={}
  def add_contacts():
    name=input("name:")
    phone=input("phone:")
    contacts[name]=phone
    print(contacts)


  def search_contacts():
    details = input("Enter name: ")

    if details in contacts:
        print(f"Name: {details}")
        print(f"Phone: {contacts[details]}")
    else:
        print("Contact not found")

  def show_contacts():
    if contacts:
        for name, phone in contacts.items():
            print(f"Name: {name}")
            print(f"Phone: {phone}")
    else:
        print("No contacts available")

  def delete_contacts():
    deleted = input("Enter contact name to delete: ")

    if deleted in contacts:
        del contacts[deleted]
        print("Contact deleted successfully")
    else:
        print("Contact not found")


  while True:
    print("1.add contacts")
    print("2.search contacts")
    print("3.show contacts")
    print("4.delete contacts")
    print("5.Exit")

    choice=input("enter your choice :")
    if choice =="1":
      add_contacts()
    elif choice =="2":
      search_contacts()
    elif choice =="3":
      show_contacts()
    elif choice =="4":
       delete_contacts()
    elif choice=="5":
       break

    else:
       print("invalid choice")
    
elif choice==2:
   l=[]
   def add_task():
    task=input('enter here:')
    l.append(task)
    print(l)

   def remove_task():
     i=int(input('enter task number'))
     l.pop(i-1)
     print("task removed successfully")

   def task_status():
     print("1.task completed")
     print("2.task pending")
     status=int(input('enter task status'))
     if status==1:
          print("🥳hurray task completed🥳")
     else:
          print("😢oops task pending😢")
   def show_task():
      for i in l:
       print(i)
   while True:
     print("1.add task")
     print("2.remove task")
     print("3.show task")
     print("4.task status")
     print("5.exit")
     choice=int(input('enter your choice '))
     if choice==1:
          add_task()
     elif choice==2:
          remove_task()
     elif choice==3:
          show_task()
     elif choice==4:
          task_status()
     elif choice==5:
          print("hope this site is helpful")
          break
     else:
          print("invalid choice")



