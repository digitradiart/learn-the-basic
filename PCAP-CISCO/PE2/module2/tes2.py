class Ex(Exception):
    def __init__(self,msg):
        self.args = (msg,)

try:
    raise Ex('ex')
except Ex as e:
    print(e)
except Exception as e:
    print(e)