## **App-wide styling in App.vue**

> It is common to have App.vue only set app-wide styles, and make its template as simple as possible.

![Alt app wide style in App.vue](pic/06.jpg)

![Alt page](pic/07.jpg)

## **New component for scoped styling**

![Alt plan: new component for ul styles](pic/08.jpg)

![Alt transfer ul content from App.vue to new component](pic/09.jpg)

- If you just want ul style to be written in another component, why not just use a slot, but move the whole template?

  - Because the App.vue template must also be as lean as possible.

## **Scoped styling**

![Alt ul style](pic/10.jpg)

![Alt li style](pic/11.jpg)

## **Result page**

![Alt page result](pic/12.jpg)
