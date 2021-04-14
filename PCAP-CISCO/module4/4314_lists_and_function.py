"""
Effects and results: lists and functions

There are two additional questions that should be answered here.

The first is: may a list be sent to a function as an argument?

Of course it may! Any entity recognizable by Python can play the role of a function argument, although it has to be assured that the function is able to cope with it.

So, if you pass a list to a function, the function has to handle it like a list.

A function like this one here:
"""
def list_sum(lst):
    s = 0
    
    for elem in lst:
        s += elem
    
    return s


# and invoked like this:
# print(list_sum([5, 4, 3]))


# will return 12 as a result, but you should expect problems if you invoke it in this risky way:
# print(list_sum(5))

# Python's response will be unequivocal:
# TypeError: 'int' object is not iterable



# This is caused by the fact that a single integer value mustn't be iterated through by the for loop.