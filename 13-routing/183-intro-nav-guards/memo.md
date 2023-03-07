## **Intro of Navigation Guard**

![Alt intro navigation guard](pic/09.jpg)

## **Navigation results of various next()**

### _next() -> pass the nav_

![Alt next()](pic/10.jpg)

### _next(false) -> cancel the nav_

![Alt next(false)](pic/11.jpg)

### _next() with string path -> nav to specific page_

![Alt next(path string)](pic/12.jpg)

- As with RouterLink, we can use object path and route name instead of path instead of string path.

- Passing path directly to next() will generate infinite navigation, some corrections must be made.

### _fix infinit nav_

![Alt fix infinit nav](pic/13.jpg)
