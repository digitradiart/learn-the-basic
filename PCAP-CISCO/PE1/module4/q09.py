def fun1(a):
    return a**a
    
def fun2(a):
    return fun1(a) * fun1(a)
    
print(fun2(2))