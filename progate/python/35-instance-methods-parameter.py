# Let's review what we've learned so far about classes and instances.
# A class is like a blueprint and an instance is an object that we create using that blueprint. The properties of an instance are called instance variables and functions are called instance methods. 

# Method for the Total Price
# Using what we've learned so far, let's make a method that calculates the total price. When passing arguments to the instance method, don't forget that self is automatically passed. Any arguments you input will go to the definition's second parameter and on.

class MenuItem:
    def info(self):
        return self.name + ': $' + str(self.price)

    # Define the get_total_price method
    def get_total_price(self, count):
        total_price = self.price * count
        return total_price


menu_item1 = MenuItem()
menu_item1.name = 'Sandwich'
menu_item1.price = 5

print(menu_item1.info())

# Call the get_total_price method
result = menu_item1.get_total_price(4)

# Output 'Your total is $____'
print('Your total is $' + str(result))