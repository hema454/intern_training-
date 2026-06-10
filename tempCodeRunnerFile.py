n=int(input('enter here:'))
if n>0:
    print("positive number")
    if n%2==0:
      print("even number")
    else:
      print("odd number")
elif n<0:
    print("negative number")
    if n%2!=0:
      print("odd number")
