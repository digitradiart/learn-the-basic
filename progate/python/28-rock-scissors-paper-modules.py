# The code in our script.py file has become very long. As your code gets longer, it becomes harder to read and comprehend, and could lead you to unwanted bugs. To prevent this, let's learn how to divide code into separate files.
# We can move parts of our code to a separate file, and import it as a module. A module is a file that can be imported into another file.
# By importing a module, you can use the functions in that module.
# We'll be moving some of the functions in script.py to utils.py.
# You can call a function of a module by putting the name of the module before the function name, like module_name.function_name().

import utils

print('Starting the Rock Paper Scissors game!')
player_name = input('Please enter your name: ')

print('Pick a hand: (0: Rock, 1: Paper, 2: Scissors)')
player_hand = int(input('Please enter a number (0-2): '))

# Call the validate function of utils module
if utils.validate(player_hand):
    computer_hand = 1
    
    # Call the print_hand function of utils module
    utils.print_hand(player_hand, player_name)
    utils.print_hand(computer_hand, 'Computer')
    
    # Call the judge function of utils module
    result = utils.judge(player_hand, computer_hand)
    print('Result: ' + result)
else:
    print('Please enter a valid number')