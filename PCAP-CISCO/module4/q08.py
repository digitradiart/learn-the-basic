list = ["Mary", "had", "a", "little", "lamb"]

def list(list):
    del list[3]
    list[3] = "ram"
    
print(list(list))