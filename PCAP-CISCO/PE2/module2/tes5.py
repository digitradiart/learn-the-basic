class A:
    V = 2

class B:
    v  = 1

class C(B):
    pass

o = C()
print(o.v)