## **Vue option - 'watch'**

![Alt intro watch](pic/01.jpg)

![Alt watch other property change](pic/02.jpg)

![Alt explain  in page](pic/03.jpg)

![Alt but problem](pic/04.jpg)

![Alt add condition logic](pic/05.jpg)

![Alt intro value arg](pic/06.jpg)

## **When to use 'watch' better instead of 'computed'**

### _Focus on property 'change' instead of computing result_

> In fact, 'watch' is not suitable for generating results, and here are some practical examples to illustrate why.

![Alt multiple properties to compute result](pic/07.jpg)

![Alt back to compute](pic/08.jpg)

![Alt watch counter](pic/09.jpg)

### _Time delay update_

> Because 'watch' is focused on property changes, it can easily handle this kind of requirement, which would be very difficult if it were all implemented in 'computed'.

![Alt setTimeout](pic/10.jpg)

![Alt callback this](pic/11.jpg)
