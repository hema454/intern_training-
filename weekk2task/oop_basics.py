print("1.student records")
print("2.bank account")

choice=int(input("enter your choice:"))
if choice==1:
  class student:
    institute="ABC"
    location="chennai"
    def __init__(self,name,grade):
        self.name=name
        self.grade=grade
    def study(self):
        print(self.name,"is studying")
    def show_details(self):
        print(self.institute)
        print(self.location)
        print(self.name)
        print(self.grade)
  std1=student("Hema",'A')
  std1.show_details()
  std1.study()
  std2=student("sreya",'A')
  std2.show_details()
  std2.study()

if choice==2:
    class bank:
     bank_name="SBI"
     branch="saidapet"
     def __init__(self,name,age,account_no,Ifsc,balance):
        self.name=name
        self.age=age
        self.account_no=account_no
        self.Ifsc=Ifsc
        self.balance=balance
     def deposit(self):
            amount=int(input("enter deposit amount"))
            self.balance+=amount
            print("amount deposited successfully")
     def withdraw(self):
             amount=int(input("enter withdrawal amount"))
             if amount<=self.balance:
              self.balance-=amount
              print("amount withdrawn successfully")
             else:
              print("insufficient balance")

     def check_balance(self):
       print("Available balance",self.balance)
     def end(self):
        print("🙏🙏Thank you visit again🙏🙏")
    cst1=bank("Hema",21,12345678,"ABCNO",40000)
    cst2=bank("sreya",25,90223154,"DEF",20000)

acc = int(input("Enter account number: "))
     
if acc == cst1.account_no:
    customer = cst1
elif acc == cst2.account_no:
    customer = cst2
else:
    print("Invalid account number")
while True:
       print("1.deposit")
       print("2.withdraw")
       print("3.check balance")
       print("4.exit")
       choice=int(input("enter your choice"))
       if choice==1:
          customer.deposit()
       if choice==2:
          customer.withdraw()
       if choice==3:
          customer.check_balance()
       if choice==4:
          customer.end()
