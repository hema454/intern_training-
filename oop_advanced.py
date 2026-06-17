print("1.animal sounds")
print("2.area")

choice=int(input("enter your choice:"))
if choice==1:
  class animal:
    def __init__(self,type,color,sound):
        self.type=type
        self.color=color
        self.sound=sound
    def speak(self):
        print(self,self.sound)
    def show_properties(self):
        print("animal",self.animal)
        print("color",self.color)
        print("sound",self.sound)
    def __str__(self):
        return f" type: {self.type}, color: {self.color},sound:{self.sound},foods:{self.foods}"
  class dog(animal):
    def __init__(self,type,color,sound,foods):
        super().__init__(type,color,sound)
        self.foods=foods
  class cat(animal):
    def __init__(self,type,color,sound,foods):
        super().__init__(type,color,sound)
        self.foods=foods
        
  A1=dog("hybrid","black","bark","nonveg")
  A2=cat("ginger","white","meow","nonveg")
  animals = [A1, A2]
  for animal in animals:
    print(animal)


if choice==2:

  class shape:
    def __init__(self):
        pass
    def __str__(self):
        return f"area{self.area}"
  class rectangle(shape):
    def __init__(self,length,breadth,):
        super().__init__()
        self.length=length
        self.breadth=breadth
        self.area=length*breadth
  class circle(shape):
    def __init__(self,pie,radius):
        super().__init__()
        self.pie=pie
        self.radius=radius
        self.area=pie*radius*radius
        print("area",self.area)
  R=rectangle(75,15)
  C=circle(3.14,6)
  print(R.area)
