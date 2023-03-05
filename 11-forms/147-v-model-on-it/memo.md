## **Can We Just Use v-model on custom component?**

![Alt v-model component?](pic/16.jpg)

![Alt specialized event and props for component](pic/17.jpg)

- So the answer is Yes, but the custom component needs to be adjusted for specialized events/props.

## **Add Specialized props and emit event in the child component**

![Alt add props and emit specialized event in child](pic/18.jpg)

![Alt result and not back to null](pic/19.jpg)

## **Fix only assign INITIAL state problem**

![Alt reason and fix](pic/20.jpg)

![Alt work now](pic/21.jpg)

## **Keep State only in parent component(where the form in)**

![Alt keep state only in parent](pic/22.jpg)

![Alt same result but](pic/23.jpg)

- It is better to add the option 'emits', although only the document functionality but it is a good habit.
