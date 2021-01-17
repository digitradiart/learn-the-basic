# You can set the default value of a parameter. The default will be used when no argument for the parameter is provided.
# Add a default value for name
def print_hand(hand, name = 'Guest'):
    print(name + ' picked: ' + hand)

# Add an argument to print_hand
print_hand('Rock')