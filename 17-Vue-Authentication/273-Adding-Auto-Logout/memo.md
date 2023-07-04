## **Fix problem: auto-login even user already logout**

![remove login data from local storage when logout](./pic/01.png) 

## **Demand: auto-logout based on 'expireIn' from Firebase**

### _documents_

![docs of Firebox, res data has expireIn](./pic/02.png) 

### _get future expiration date and store it to local storage_

![get future expiration date and store to local storage](./pic/03.png) 

### _Vuex store actually do NOT need expiration related data_

![Vuex store don't need expiration data](./pic/04.png) 

### _set timer_

![set timer to auto logout when login](./pic/05.png) 

### _test_

![test](./pic/06.png) 

![test plus reload](./pic/07.png) 

## **Demand: switch page after auto-logout automatically**

> url change is a side effect, but must be changed under certain circumstances(auto-logout) rather than just using the component load or destroy to make a judgment, so we need a new state in Vuex store, which is the same as the useEffect dependencies in React use state.

### _demand_

![demand: switch page after auto logout](./pic/08.png) 

### _set new state in Vuex store 'auth' to monitor this behavior_

![set new state 'didAutologout' to monitor this behavior](./pic/09.png) 

- The most difficult part is that we don't just use this state to determine login and logout, but to determine whether the logout is "automatic" or not.

### _TEST auto-logout mechanism_

![test login](./pic/10.png) 

![test AUTO logout](./pic/11.png) 

### _Watch 'didAutologout'_

![using it in root component App](./pic/12.png) 

