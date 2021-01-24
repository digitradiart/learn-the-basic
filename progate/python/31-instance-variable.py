# Adding Data to Instances
# We can add the data we want to each instance (menu item). In the example below, the instance has the name "Sandwich" and a price of "$5".
 
# Instance Variables
# As shown below, we can use menu_item1.name = "Sandwich" to set the name of menu_item1 to "Sandwich". Here, name is referred to as an instance variable. 

# Using Instance Variables
# You can access and use the value of an instance variable by calling instance.instance_variable_name.

class MenuItem:
    pass


menu_item1 = MenuItem()

menu_item1.name = 'Sandwich'  #instance variable name
print(menu_item1.name)

# Set the price of menu_item1 to 5
menu_item1.price = 5 #instance variable price

# Output the price of menu_item1
print(menu_item1.price)