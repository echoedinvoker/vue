## **Move $store to computed (optional)**

> We can simply transfer the $store part of the template to the computed part of the script to reduce the logic of the template.

![Alt computed](pic/01.jpg)

## **Split counter to other component (but button stay)**

![Alt split counter to other component](pic/02.jpg)

- We left the button in on purpose, because it would have been a pain if it is local state.

![Alt use component](pic/03.jpg)

## **Result**

> Handling the state in the Vuex store saves a lot of trouble with events or data propagation.

![Alt still work](pic/04.jpg)
