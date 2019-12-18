"""A poor attempt at a plot.  Needs style."""

songs = [("All I Want for Christmas Is You", 1994),
("It’s Beginning to Look a Lot Like Christmas", 1951),
("A Holly Jolly Christmas", 1964),
("Rockin’ Around the Christmas Tree", 1958),
("It’s the Most Wonderful Time of The Year", 1958),
("Rudolph the Red-Nosed Reindeer", 1949),
("Last Christmas", 1984),
("Jingle Bell Rock", 1958),
("Let It Snow, Let It Snow, Let It Snow", 1945),
("Sleigh Ride", 1948),
("The Christmas Song", 1946),
("Here Comes Santa Claus (Down Santa Claus Lane)", 1947),
("White Christmas", 1941),
("Santa Claus Is Comin’ to Town", 1934),
("You’re a Mean One, Mr. Grinch", 1966),
("Home for the Holidays", 1954),
("Feliz Navidad” by Jose Felician", 1970),
("Frosty the Snowman", 1950),
("Have Yourself a Merry Little Christmas", 1944),
("Santa Baby", 1953),
("Blue Christmas", 1957),
("Christmas Eve/Sarajevo 12/24", 1995),
("Underneath the Tree", 2013),
("Do They Know It’s Christmas?", 1984),
("Wonderful Christmastime", 1979)]

import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
%pylab inline

years = [song[1] for song in songs]

hist = np.histogram(years, bins=range(1900, 2020, 10), range=(1900, 2020))

x, y = hist

hist

fig, ax = plt.subplots()

ax.hist(years, bins=np.array([1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000,
        2010]))
plt.show()