# Earlier, we learned how to create a custom utils module. Python also has a list of built-in modules that you can use, in the Python Standard Library. Let's try using one of these very useful modules.

# We'll be randomizing the hand chosen by the computer using the randint function from the random module. By writing random.randint(x, y), you can get a random integer between x and y inclusive.

import utils
import random

print('Starting the Rock Paper Scissors game!')
player_name = input('Please enter your name: ')

print('Pick a hand: (0: Rock, 1: Paper, 2: Scissors)')
player_hand = int(input('Please enter a number (0-2): '))

if utils.validate(player_hand):
    # Assign a random number between 0 and 2 to computer_hand using randint
    computer_hand = random.randint(0,2)
    
    utils.print_hand(player_hand, player_name)
    utils.print_hand(computer_hand, 'Computer')

    result = utils.judge(player_hand, computer_hand)
    print('Result: ' + result)
else:
    print('Please enter a valid number')