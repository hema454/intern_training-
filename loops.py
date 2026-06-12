print("1. Multiplication tables")
print("2. sum of numbers")
print("3. Fizzbuzz challenge")
print("4.number guessing challenge")

choice=int(input('enter here:'))
if choice==1:
  n=int(input('enter here:'))
  for i in range(1,13):
    print(n,"x",i,"=",n*i)

elif choice==2:
  sum=0
  for i in range(1,101):
    sum+=i
  print(sum)

elif choice==3:
  n=int(input('enter here:'))
  for i in range(1,n+1):
   if i%3==0 and i%5==0:
    print("fizzbuzz")
   elif i%3==0:
    print("fizz")
   elif i%5==0:
    print("buzz")
   else:
    print(i)

elif choice==4:
  num=567
  while True:
   n=int(input('enter here:'))
   if n==num:
    print("guess is correct")
    break
   elif n<=0:
      print("number is greater than zero")
   elif n+1==num or n-1==num:
      print("very close")
   elif n<num:
    print("number is higher")
   elif n>num:
      print("number is lower")
   elif n+1==num:
      print("very close")

else:
  print("invalid choice")