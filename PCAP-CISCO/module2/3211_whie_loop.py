
# Looping your code with while

# Do you agree with the statement presented below?
# while there is something to do
#     do it


# Note that this record also declares that if there is nothing to do, nothing at all will happen.

# In general, in Python, a loop can be represented as follows:
# while conditional_expression:
#     instruction


# If you notice some similarities to the if instruction, that's quite all right. Indeed, the syntactic difference is only one: you use the word while instead of the word if.

# The semantic difference is more important: when the condition is met, if performs its statements only once; while repeats the execution as long as the condition evaluates to True.

# Note: all the rules regarding indentation are applicable here, too. We'll show you this soon.

# Look at the algorithm below:
# while conditional_expression:
#     instruction_one
#     instruction_two
#     instruction_three
#     :
#     :
#     instruction_n


# It is now important to remember that:

#     if you want to execute more than one statement inside one while, you must (as with if) indent all the instructions in the same way;
#     an instruction or set of instructions executed inside the while loop is called the loop's body;
#     if the condition is False (equal to zero) as early as when it is tested for the first time, the body is not executed even once (note the analogy of not having to do anything if there is nothing to do);
#     the body should be able to change the condition's value, because if the condition is True at the beginning, the body might run continuously to infinity - notice that doing a thing usually decreases the number of things to do).

# An infinite loop

# An infinite loop, also called an endless loop, is a sequence of instructions in a program which repeat indefinitely (loop endlessly.)

# Here's an example of a loop that is not able to finish its execution:
# while True:
#     print("I'm stuck inside a loop.")


# This loop will infinitely print "I'm stuck inside a loop." on the screen.

# NOTE

# If you want to get the best learning experience from seeing how an infinite loop behaves, launch IDLE, create a New File, copy-paste the above code, save your file, and run the program. What you will see is the never-ending sequence of "I'm stuck inside a loop." strings printed to the Python console window. To terminate your program, just press Ctrl-C (or Ctrl-Break on some computers). This will cause the so-called KeyboardInterrupt exception and let your program get out of the loop. We'll talk about it later in the course.

# Let's go back to the sketch of the algorithm we showed you recently. We're going to show you how to use this newly learned loop to find the largest number from a large set of entered data.

# Analyze the program carefully. See where the loop starts (line 8). Locate the loop's body and find out how the body is exited:
# # Store the current largest number here.
largest_number = -999999999

# Input the first value.
number = int(input("Enter a number or type -1 to stop: "))

# If the number is not equal to -1, continue.
while number != -1:
    # Is number larger than largest_number?
    if number > largest_number:
        # Yes, update largest_number.
        largest_number = number
    # Input the next number.
    number = int(input("Enter a number or type -1 to stop: "))

# Print the largest number.
print("The largest number is:", largest_number)


# Check how this code implements the algorithm we showed you earlier.