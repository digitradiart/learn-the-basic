# File name: MultipleLines.py
# Author: Data Science Learner
# Begin code
import matplotlib.pyplot as plt
import numpy as np
x =np.arange(1,10) # values from 1 to 10
y1 = x+2
y2 = x*6
y3 = x/5
plt.plot(x,y1, x,y2, x,y3) # plot the figure
plt.show()
