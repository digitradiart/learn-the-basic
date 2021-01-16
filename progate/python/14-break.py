# You can use the break statement to exit loops immediately. Break statements are usually combined with if statements, like in the image below. They can be used the same way in while loops. 
numbers = [765, 921, 777, 256]
for number in numbers:
    print(number)
    # When the number variable is 777, print '777 found, stopping loop' and exit the loop
    if number == 777 :
        print('777 found, stopping loop')
        break