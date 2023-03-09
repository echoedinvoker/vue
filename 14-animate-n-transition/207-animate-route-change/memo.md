## **Prepare: page routes**

> Simply make a two-page switching routes, including page components.

![Alt prepare pages](pic/01.jpg)

![Alt result and demain](pic/02.jpg)

## **Implement Transition Animation as before**

> At first, we treat the RouterView the same way as a normal element to implement in the transition animation.

![Alt implement trans as before](pic/03.jpg)

![Alt result and warn](pic/04.jpg)

## **Refactor by official suggestion**

> The official recommendation seems a bit strange, but as long as you follow it, you can make a perfect result.

![Alt following official suggestion to refactor](pic/05.jpg)

![Alt result](pic/06.jpg)

## **Problem: Transition Animation when reloading app**

> Lastly, we have another problem, which is that the route transition animation will appear every time we reload the web page.

![Alt reload problem](pic/07.jpg)

![Alt fix it](pic/08.jpg)

## **Note: When you use transition to route component, your route component must be only one root element!
