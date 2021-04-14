# Exercise 1
# What is the output of the following snippet?
def intro(a="James Bond", b="Bond"):
    print("My name is", b + ".", a + ".")

intro() # My name is Bond. James Bond.

# Exercise 2
# What is the output of the following snippet?
def intro(a="James Bond", b="Bond"):
    print("My name is", b + ".", a + ".")

intro(b="Sean Connery") # My name is Sean Connery. James Bond.

# Exercise 3
# What is the output of the following snippet?
def intro(a, b="Bond"):
    print("My name is", b + ".", a + ".")

intro("Susan") # My name is Bond. Susan.

# Exercise 4
# What is the output of the following snippet?
def add_numbers(a, b=2, c):
    print(a + b + c)

add_numbers(a=1, c=3) # SyntaxError - a non-default argument (c) follows a default argument (b=2) 