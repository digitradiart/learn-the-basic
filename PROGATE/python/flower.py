#X(k)=cos(14πk/9000)(1-(3/4)(sin(20πk/9000))4-(1/4)(cos(60πk/9000))3),

#Y(k)=sin(14πk/9000)(1-(3/4)(sin(20πk/9000))4-(1/4)(cos(60πk/9000))3),

#R(k)=(1/120)+(1/18)(sin(60πk/9000))4+(1/18)(sin(160πk/9000))4.



import matplotlib.pyplot as plt
import numpy as np


X(k)=cos(14*Pi*k/9000)*(1-(3/4)(sin(20πk/9000))4-(1/4)(cos(60πk/9000))3)

Y(k)=sin(14πk/9000)(1-(3/4)(sin(20πk/9000))4-(1/4)(cos(60πk/9000))3)

R(k)=(1/120)+(1/18)(sin(60πk/9000))4+(1/18)(sin(160πk/9000))4

# setting the axes at the centre


# plot the function
plt.plot(X(k),Y(k),R(k))

# show the plot
plt.show()

