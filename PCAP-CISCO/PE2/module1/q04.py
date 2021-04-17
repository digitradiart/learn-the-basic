from random import random, seed

seed(5)

for i in range(5):
    print(random())
"""
Selected functions from the random module: continued

The randrange and randint functions

If you want integer random values, one of the following functions would fit better:

    randrange(end)
    randrange(beg, end)
    randrange(beg, end, step)
    randint(left, right)

The first three invocations will generate an integer taken (pseudorandomly) from the range (respectively):

    range(end)
    range(beg, end)
    range(beg, end, step)

Note the implicit right-sided exclusion!

The last function is an equivalent of randrange(left, right+1) - it generates the integer value i, which falls in the range [left, right] (no exclusion on the right side).

Look at the code in the editor. This sample program will consequently output a line consisting of three zeros and either a zero or one at the fourth place.
"""