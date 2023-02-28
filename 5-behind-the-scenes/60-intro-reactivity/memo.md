## **Merge data and function to Vue global object**

![Alt merge to global object and proxy data](pic/01.jpg)

- The properties in 'data' and the functions in 'methods' are merged into a global object.
  - In addition to being merged, the properties in 'data' will be wrapped with a proxy.
    - proxy is native JS thing.

## **Any change of data properties will be noticed by Vue because of proxy**

> The following diagram shows how Vue's built-in reactivity does this.

![Alt any change of data will be noticed](pic/02.jpg)
