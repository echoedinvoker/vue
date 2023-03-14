## **Refactor Form data (Adding isValid)**

> Related parts should also be changed.

![Alt refactor form data (add isValid)](pic/01.jpg)

## **Validate Single Field**

### _method_

> Use parameter to add method flexibility, so that a single method can be used for validation of different fields.

![Alt validate methods for each field indepently](pic/02.jpg)

### _dynamic render/styling_

> The styling of the course resource already provides the class 'invalid' for invalid fields styling.

![Alt dynamic render/styling](pic/03.jpg)

### _test_

![Alt page result](pic/04.jpg)

## **Validate before submitting**

![Alt split validate all and new state](pic/05.jpg)

![Alt implement validateAll and validate in submitForm](pic/06.jpg)
