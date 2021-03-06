# The __init__ Method

# Let's learn about the __init__ method (also known as a class constructor in Python), which is executed right after an instance is created. When ClassName() is called and an instance is created, the __init__ method will be called immediately after. We'll learn how to use it in the next slides.

# The __init__ method can be defined like any other instance method.
# In the example below, executing menu_item1 = MenuItem() will create a MenuItem instance and automatically call the __init__ method and run the code within it.

class MenuItem:
    # Define the __init__ method
    def __init__(self):
        print('An instance of the MenuItem class was created!')

    def info(self):
        return self.name + ': $' + str(self.price)

    def get_total_price(self, count):
        total_price = self.price * count
        return total_price


menu_item1 = MenuItem()
menu_item1.name = 'Sandwich'
menu_item1.price = 5

print(menu_item1.info())

result = menu_item1.get_total_price(4)
print('Your total is $' + str(result))