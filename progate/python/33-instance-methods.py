# Since methods defined in classes are called from instances, we refer to them as instance methods!  
# Methods called from instances are called instance methods! Got it!

# How to Use self
# The first parameter, self, references the instance being called on. Because of this, you can use self to access the instance and its contents. In the example below, self.name is used to get the value of the name instance variable of menu_item1. 

# Type Conversion Review
# Now let's use the values of name and price to output "Sandwich: $5". Since the value of price is an integer, before we can combine it with a string we have to convert it to a string itself. Let's review how to convert an integer to a string in the example below.

class MenuItem:
    def info(self):
        # Output in the format '____: $____'
        print(self.name + ': $' + str(self.price))


menu_item1 = MenuItem()
menu_item1.name = 'Sandwich'
menu_item1.price = 5

menu_item1.info()

menu_item2 = MenuItem()
menu_item2.name = 'Chocolate Cake'
menu_item2.price = 4

menu_item2.info()