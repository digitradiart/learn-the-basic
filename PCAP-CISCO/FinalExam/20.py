lst = [[c for c in range(r)] for r in range(3)]

for element in lst:
    if len(element) < 2:
        print("*")