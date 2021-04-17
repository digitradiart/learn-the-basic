# class A:
#     A = 1
    
# print(hasattr(A, 'A'))

class A:
    A = 1
    def __init__(self, v):
        self.__a = 0
print(hasattr(A, 'a'))