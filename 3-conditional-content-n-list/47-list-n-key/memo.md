## **Event Propagation Issues**

![Alt event propogation problem](pic/01.jpg)

![Alt event modifier - stop](pic/02.jpg)

## **Issues arising from the high performance instense process of Vue**

![Alt more strange thing](pic/03.jpg)

![Alt strange result](pic/04.jpg)

- The problem arises because Vue does not distinguish between elements in a list.

- So Vue does not delete the first element in this case, but moves the dynamic data of the 2nd elements to the first element.

  - dynamic data is which wrapped with curly brackets.
  - The input data will be treated as something that the original DOM element has, so it will not be moved or deleted.
  - This approach works pretty effectively in the right cases, but it can create bugs and even slow down performance if there are more complex requirements.

## **Vue attribute - key (unique identifier)**

![Alt add key attr as unique identifier](pic/05.jpg)

![Alt v-bind it and give appropriet value](pic/06.jpg)

- In fact, if the data is obtained from a database, the data itself usually has a unique identifier, so the source of the unique identifier is not a problem in the real case.
