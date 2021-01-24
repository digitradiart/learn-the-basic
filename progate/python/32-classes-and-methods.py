# Adding Methods to Classes
# We can define functions within a class. Functions that are defined within a class are called methods. Defining methods is just like defining normal functions, but by explicit convention, the first parameter is to be named self!
# You can call methods that you defined in a class using an instance of that class. The syntax for this is instance.method_name().

class MenuItem:
    # Define the info method
    def info(self):
        print('Display menu item name and price')


menu_item1 = MenuItem()
menu_item1.name = 'Sandwich'
menu_item1.price = 5

# Call the info method from menu_item1
menu_item1.info()

menu_item2 = MenuItem()
menu_item2.name = 'Chocolate Cake'
menu_item2.price = 4

# Call the info method from menu_item2
menu_item2.info()