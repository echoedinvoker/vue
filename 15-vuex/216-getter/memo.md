## **Create New Component to Access Global State**

> In addition to TheCounter, make another component to take the value of the global state 'counter'.

![Alt prepare new comp](pic/06.jpg)

![Alt result](pic/07.jpg)

## **Problem Happend**

![Alt decide new present way](pic/08.jpg)

## **Getters**

> In fact, accessing a state in the Vue store directly from a component, while technically possible, is something that shouldn't happen.

![Alt concept of getters](pic/09.jpg)

![Alt create getters method and use it](pic/10.jpg)

## **Multiple Getters to Compute Result**

> The methods in Getters often use each other's results for processing to get results.

![Alt getters use getters result](pic/11.jpg)

![Alt getters second arg](pic/12.jpg)

![Alt undefined](pic/13.jpg)
