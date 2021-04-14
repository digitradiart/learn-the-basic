dictionary = {}
list = ['a', 'b', 'c', 'd']

for i in range(len(list) - 1):
    dictionary[list[i]] = (list[i], )
for i in sorted(dictionary.keys()):
    k = dictionary[i]
    print(k)