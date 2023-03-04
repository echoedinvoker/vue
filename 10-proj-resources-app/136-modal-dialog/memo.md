## **Default Alert**

![Alt default alert for empty input](pic/01.jpg)

![Alt test](pic/02.jpg)

## **New UI Component: BaseDialog**

> Default alert has no styling, so we want to create our custom alert with new component.

![Alt create BaseDialog component](pic/03.jpg)

- We intentionally built a very flexible UI component, even though in this case it is only used as an Error Alert.
  - It is very suitable to build very flexible, very generic components in large project, it can save lots of manpower.

![Alt backdrop and styling](pic/04.jpg)

- The styling of the backdrop part is very important, there is a fixed format to work.
- The backdrop is part of the BaseDialog in this case.
  - You can also split it into another component if you think the codes are already too many.

## **Setup Data aspect**

![Alt set state and method to change it](pic/05.jpg)

## **Register BaseDialog Globally & Use It to Alert**

![Alt register BaseDialog globally & use BaseDialog](pic/06.jpg)

![Alt test and more demand](pic/07.jpg)

## **More Ways to Close Alert**

![Alt use custom event to trigger parent method](pic/08.jpg)

- Be careful with the button part, it is very counter intuitive.
