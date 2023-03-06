## **For routed components, we don't need to emit event**

> If the components that need to be dynamically rendered have routes, we don't need to use the emit event method.

![Alt we don't need emit event any more if has routes](pic/01.jpg)

## **Dynamically switch components by changing routes**

> We can directly use the HTML element provided by Vue-router to change the path to dynamically render component.

![Alt directly change routes to switch components](pic/02.jpg)

- This approach does not require a parent/child association and is very simple.

## **Change CSS selector**

![Alt change CSS selector](pic/03.jpg)

## **Test and classes**

![Alt test and observe element class](pic/04.jpg)
