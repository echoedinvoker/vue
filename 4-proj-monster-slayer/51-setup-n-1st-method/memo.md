## **Download backbond of Monster Slayer Game**

![Alt dl resource ](pic/01.jpg)

## **First thing: data**

![Alt first data](pic/02.jpg)

## **Build some 'methods' func for ATTACK**

![Alt first methods func](pic/03.jpg)

- The monster's attack should be stronger than the player, so that the player has a reason to use other actions.

### _Refactor with global function_

![Alt refactor with global func](pic/04.jpg)

- In other words, functions that don't need to access Vue property and won't be called in HTML shouldn't be written in a Vue app.

### _Call 'methods' function in 'methods' function_

![Alt call 'methods' func in func](pic/05.jpg)

## **Conclusion**

- So when implementing a Vue app, don't think about binding first, whether it's data binding or event binding, you should start with data and data handling first to avoid confusion.
