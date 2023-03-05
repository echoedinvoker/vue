## **By Default, Even Input Type is 'number', value still is String type**

![Alt type=number](pic/01.jpg)

### _Using reft to test it_

![Alt ref test](pic/02.jpg)

## **v-model**

![Alt v-model test](pic/03.jpg)

- When we use v-model, we get Number type, because when input type='number', v-model automatically converts the value type from String to Number from the input value.

## **Why we care about input type?**

![Alt plus operator](pic/04.jpg)

- As shown above, different types of values will give completely different results, and failure to pay attention will lead to bugs.

## **modifiers of v-model**

> v-model also has several very useful modifiers.

![Alt v-model modifiers](pic/05.jpg)

- When the input type is not number, but you need to convert the input value to Number type, you can use the modifier 'number' of v-model directly.
