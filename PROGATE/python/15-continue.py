# Unlike break statements that will terminate a loop, continue statements skip the loop for just that specific iteration. Continue statements can be used in the same way in both for loops and while loops. 

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    # Skip the loop for numbers divisible by 3
    if number % 3 == 0 :
        continue
    print(number)