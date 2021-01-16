# Assign a dictionary to the fruits variable
fruits = {'apple':'manzana', 'orange':'naranja'}

# Print the value with the key 'orange'
print(fruits['orange'])

# By using the fruits dictionary, print 'apple is ___ in Spanish'
print('apple is ' + fruits['apple'] + ' in Spanish')


########## UPDATE DICTIONARY ##########
fruits = {'apple': 1, 'banana': 2, 'orange': 4}

# Update the value with the key 'banana' to 3
fruits['banana'] = 3

# Add an element to fruits with the key 'grape' and the value 5
fruits['grape'] = 5

# Print fruits
print(fruits)

################# FOR LOOPS IN DICTIONARY ##########################
fruits = {'apple': 'manzana', 'orange': 'naranja', 'grape': 'uva'}

# With a for loop, print '___ is ___ in Spanish'
for keyFruits in fruits:
    print(keyFruits + ' is' + fruits[keyFruits] + ' in Spanish')