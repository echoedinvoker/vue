## **Disctrict Jobs from HTML**

![Alt bad practice](pic/03.jpg)

## **How to write logic in JS?**

### _Try to just write a normal function_

![Alt write func out of vue](pic/04.jpg)

- There are many reasons why it does not work, and there are two main reasons:
  - counter is not a global variable, it is just a property in the option 'data' in the Vue object.
  - This is written as a global function, but it will not be access by the Vue mount section.

### _Write function in option 'methods' of Vue_

![Alt wirite in 'methods'](pic/05.jpg)

## **Two ways to set function to event listener in HTML**

![Alt two ways to call](pic/06.jpg)
