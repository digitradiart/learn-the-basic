import sys
print(sys.version)
print("hello")
print(4 + 3)
print("-----------------------------\n \n")

name = input("what is your name?\n") #str
age = input ("how old are you?\n") #str

if int(age) == 1:
	print("Hello " + name + "! How cute you are." )
else:
	print("Hello " + name + "! You are " + age + " years old now." )
	print("-----------")
