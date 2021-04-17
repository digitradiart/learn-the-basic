import math
dir(math)


##############
from math import pi, radians, degrees, sin, cos, tan, asin

ad = 90
ar = radians(ad)
ad = degrees(ar)


print('----------------------------')
print(ad == 90.)
print(ar == pi / 2.)
print(sin(ar) / cos(ar) == tan(ar))
print(asin(sin(ar)) == ar)
print('----------------------------')

from math import e, exp, log

print(pow(e, 1) == exp(log(e)))
print(pow(2, 2) == exp(2 * log(2)))
print(log(e, e) == exp(0))
print('----------------------------')


from math import ceil, floor, trunc

x = 1.4
y = 2.6

print(floor(x), floor(y))
print(floor(-x), floor(-y))
print(ceil(x), ceil(y))
print(ceil(-x), ceil(-y))
print(trunc(x), trunc(y))
print(trunc(-x), trunc(-y))
print('----------------------------')



"""

Key takeaways

1. A function named dir() can show you a list of the entities contained inside an imported module. For example:
import os
dir(os)


prints out the list of all the os module's facilities you can use in your code.

2. The math module couples more than 50 symbols (functions and constants) that perform mathematical operations (like sine(), pow(), factorial()) or providing important values (like π and the Euler symbol e).

3. The random module groups more than 60 entities designed to help you use pseudo-random numbers. Don't forget the prefix "random", as there is no such thing as a real random number when it comes to generating them using the computer's algorithms.

4. The platform module contains about 70 functions which let you dive into the underlaying layers of the OS and hardware. Using them allows you to get to know more about the environment in which your code is executed.

5. Python Module Index (https://docs.python.org/3/py-modindex.html is a community-driven directory of modules available in the Python universe. If you want to find a module fitting your needs, start your search there.


Exercise 1

What is the expected value of the result variable after the following code is executed?
import math
result = math.e == math.exp(1)


True

Exercise 2

(Complete the sentence) Setting the generator's seed with the same value each time your program is run guarantees that...

... the pseudo-random values emitted from the random module will be exactly the same.


Exercise 3

Which of the platform module's functions will you use to determine the name of the CPU running inside your computer?


Exercise 4

What is the expected output of the following snippet?
import platform

print(len(platform.python_version_tuple()))

"""