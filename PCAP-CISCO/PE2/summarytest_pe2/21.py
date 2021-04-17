num = [i*i for i in range(5)]
foo = list(filter(lambda x:x%2, num))
print(foo)