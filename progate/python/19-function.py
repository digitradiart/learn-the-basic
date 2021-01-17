# Define print_hand function
def print_hand():
    print('You picked: Rock')
# Call print_hand function
print_hand()


print ('----------argument function-----------')
# To pass an argument to a function, the function has to have a variable, called a parameter, to receive it. In the example below, the greet function has the name parameter to receive an argument.
# Variables have a scope, which refers to the specific range in which a variable can be accessed. The scope of parameters and variables defined inside a function is limited to the function. Therefore, they cannot be used outside the function.
# Add a parameter to print_hand
def print_hand(hand):
    # Use the parameter to print 'You picked: ___'
    print('You picked: ' +  hand)

# Call print_hand with 'Rock'
print_hand('Rock')

# Call print_hand with 'Paper'
print_hand('Paper')


print ('----------multiple parameter function-----------')
# Add a parameter to print_hand
def print_hand(hand, name):
    # Change the output to '___ picked: ___'
    print(name + ' picked: ' + hand)

# Add a second argument to print_hand
print_hand('Rock', 'Ken the Ninja')

# Add a second argument to print_hand
print_hand('Paper', 'Ken the Ninja')