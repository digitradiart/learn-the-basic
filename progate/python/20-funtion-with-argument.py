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