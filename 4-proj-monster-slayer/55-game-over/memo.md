## **Fix Health Bar Stuck at Low Level Issue**

![Alt fix health stuck at low level](pic/01.jpg)

- The reason for the stuck is mainly because the width is assigned a negative value, so after the correction the minimum width will only be assigned zero.

## **Logic of Game Results**

![Alt add prob winner and checking result logic](pic/02.jpg)

- The null value is very useful, because it can be placed directly in the condition position to produce a false result.

- Because I added timeout in the heal function, it is the safest way to put the logic of game result judgment in monsterAttack.

![Alt deal with data before any binding considerations](pic/03.jpg)

- First make sure the data part can be processed correctly, and then figure out how to render to the browser.

## **HTML Game Results Rendering**

![Alt list all result in HTML](pic/04.jpg)

![Alt use v-if series directives](pic/05.jpg)
