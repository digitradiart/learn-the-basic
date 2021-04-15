"""
A few words about None: continued

Take a look at the code in the editor.

It's obvious that the strangeFunction function returns True when its argument is even.

What does it return otherwise?

We can use the following code to check it:
print(strange_function(2))
print(strange_function(1))


This is what we see in the console:
True
None

output

Don't be surprised next time you see None as a function result - it may be the symptom of a subtle mistake inside the function.
"""

n = int(input("input n: "))
def strange_function(n):
    if(n % 2 == 0):
        return True

print(strange_function(n))