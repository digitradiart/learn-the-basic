
# Pseudocode and introduction to loops

# You should now be able to write a program which finds the largest of four, five, six, or even ten numbers.

# You already know the scheme, so extending the size of the problem will not be particularly complex.

# But what happens if we ask you to write a program that finds the largest of two hundred numbers? Can you imagine the code?

# You'll need two hundred variables. If two hundred variables isn't bad enough, try to imagine searching for the largest of a million numbers.

# Imagine a code that contains 199 conditional statements and two hundred invocations of the input() function. Luckily, you don't need to deal with that. There's a simpler approach.


# The concept of numbers

# We'll ignore the requirements of Python syntax for now, and try to analyze the problem without thinking about the real programming. In other words, we'll try to write the algorithm, and when we're happy with it, we'll implement it.

# In this case, we'll use a kind of notation which is not an actual programming language (it can be neither compiled nor executed), but it is formalized, concise and readable. It's called pseudocode.

# Let's look at our pseudocode below:
largest_number = -999999999
number = int(input())
if number == -1:
    print(largest_number)
    exit()
if number > largest_number:
    largest_number = number
# Go to line 02


# What's happening in it?

# Firstly, we can simplify the program if, at the very beginning of the code, we assign the variable largest_number with a value which will be smaller than any of the entered numbers. We'll use -999999999 for that purpose.

# Secondly, we assume that our algorithm will not know in advance how many numbers will be delivered to the program. We expect that the user will enter as many numbers as she/he wants - the algorithm will work well with one hundred and with one thousand numbers. How do we do that?


# We make a deal with the user: when the value -1 is entered, it will be a sign that there are no more data and the program should end its work.

# Otherwise, if the entered value is not equal to -1, the program will read another number, and so on.

# The trick is based on the assumption that any part of the code can be performed more than once - precisely, as many times as needed.

# Performing a certain part of the code more than once is called a loop. The meaning of this term is probably obvious to you.

# Lines 02 through 08 make a loop. We'll pass through them as many times as needed to review all the entered values.

# Can you use a similar structure in a program written in Python? Yes, you can.

# Extra Info

# Python often comes with a lot of built-in functions that will do the work for you. For example, to find the largest number of all, you can use a Python built-in function called max(). You can use it with multiple arguments. Analyze the code below:
# Read three numbers.
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))
number3 = int(input("Enter the third number: "))

# Check which one of the numbers is the greatest
# and pass it to the largest_number variable.

largest_number = max(number1, number2, number3)

# Print the result.
print("The largest number is:", largest_number)


# By the same fashion, you can use the min() function to return the lowest number. You can rebuild the above code and experiment with it in the Sandbox.

# We're going to talk about these (and many other) functions soon. For the time being, our focus will be put on conditional execution and loops to let you gain more confidence in programming and teach you the skills that will let you fully understand and apply the two concepts in your code. So, for now, we're not taking any shortcuts.