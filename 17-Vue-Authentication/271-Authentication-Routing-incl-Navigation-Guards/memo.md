## **Simple redirect**

### _demand_

![demand: auto switch page after login](./pic/01.png) 

### _after login_

![use router replace after success login or sign up](./pic/02.png) 

### _after logout_

![use router replace after logout](./pic/03.png) 

## **Conditionally redirect pages**

### _write state into url (query string)_

![create a button to login to register a coach](./pic/04.png) 

![path plus query string](./pic/05.png) 

### _get state from url (query string)_

![using state from query string to group redirect url](./pic/06.png) 

- Although we can access the data from any part of the url, usually the path is used for navigation and the query string is used to store the state, when the url is needed to navigate and store the state as in the case above, the path can only be used for navigation, so the state can only be stored in the query string.

## **How to block users from entering paths manually to pages they should not enter?**

### _demand_

![demand: prevent manually insert path to invalid pages](./pic/07.png) 

### _router guard (out of router)_

![using router guard](./pic/08.png) 

### _'meta' property of routes (in the router)_

!['meta' of route](./pic/09.png) 

### _access Vuex store data in router.js_

![using 'auth' getter in router guard](./pic/10.png) 

### _test_

![test](./pic/11.png) 
