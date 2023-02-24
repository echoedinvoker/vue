## **I use some HTML tags in my Vue 'data'**

![Alt data with html tag](pic/01.jpg)

## **Directive: v-html**

![Alt v-html](pic/02.jpg)

![Alt string and js express](pic/03.jpg)

- v-html can write JS express, and of course it can also output plain strings.

## **Do not use v-html to output plain text**

![Alt why not](pic/04.jpg)

- In fact, interpolation can protect us from cross site scripting attacks, so it is necessary to use interpolation when outputting just plain text.
