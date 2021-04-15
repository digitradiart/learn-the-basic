"""
A few words about None

Let us introduce you to a very curious value (to be honest, a none value) named None.

Its data doesn't represent any reasonable value - actually, it's not a value at all; hence, it mustn't take part in any expressions.

For example, a snippet like this:
"""
print(None + 2)


# will cause a runtime error, described by the following diagnostic message:
# TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'

"""
Note: None is a keyword.

There are only two kinds of circumstances when None can be safely used:

    when you assign it to a variable (or return it as a function's result)
    when you compare it with a variable to diagnose its internal state.

Just like here:
"""
value = None
if value is None:
    print("Sorry, you don't carry any value")


# Don't forget this: if a function doesn't return a certain value using a return expression clause, it is assumed that it implicitly returns None.

# Let's test it.