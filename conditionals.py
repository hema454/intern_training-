print("1.Number classifier")
print("2.letter grade calculator")
print("3.login check")
print("4.largest of three numbers")
choice=int(input('enter here:'))

if choice==1:
  n=int(input('enter here:'))
  if n>0:
    print("positive number")
  elif n<0:
    print("negative number")
  else:
    print("zero")
  if n!=0:
    if n%2==0:
        print("even number")
    else:
        print("odd number")

elif choice==2:
  n=int(input('enter mark:'))
  if 91<=n<=100:
   print('grade:A')
  elif 81<=n<=90:
   print('grade:B')
  elif 71<=n<=80:
   print('grade:c')
  elif 61<=n<=70:
   print('grade:D')
  else:
   print('grade:F')

elif choice==3:

  username='Hemavarshini'
  password=1704
  attempts=3
  while attempts>0:
    user_id=input('enter username:')
    passkey=int(input('enter password:'))
    if user_id!=username:
      print("incorrect username")
      break
    elif user_id==username:
     if passkey==password:
      print("login successful")
      break
     else:
      print("incorrect password")
      attempts-=1
      if attempts==0:
        print("try again later")
   
elif choice==4:

  a=int(input('enter here a:'))
  b=int(input('enter here b:'))
  c=int(input('enter here c:'))
  if a>b:
    print("a is greater")
  elif b>c:
    print("b is greater")
  else:
    print("c is greater")

else:
  print("invalid choice")
