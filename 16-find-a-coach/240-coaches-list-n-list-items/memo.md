## **Plan**

![Alt plan and file/folder](pic/01.jpg)

- Technically we could implement everything in the CoachList, but it would be better to use additional component spliting codes.
  - This component belongs to the normal component.

## **CoachItem**

![Alt create list component](pic/02.jpg)

- We are using 'props' here instead of accessing data directly from the vuex store, design and accessing data should be separated, this component should focus on the design only.

### _computed_

![Alt computed links](pic/03.jpg)

- From the above process, we can find that we can first write some results using normal HTML elements or even hard code, and then replace them, so it will be easier, instead of thinking very complicated at the beginning.

## **Replace original codes with CoachItem**

![Alt use list component in ul component](pic/04.jpg)

- parent is the role of concatenating data, so pay special attention to the correctness of names.

![Alt result and future plan](pic/05.jpg)
