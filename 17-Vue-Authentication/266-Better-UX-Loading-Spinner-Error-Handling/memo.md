## **Fetching error feedback in UI**

![demand: need feedback in UI when fetch error](./pic/01.png) 

![create state "error" and render static UI](./pic/02.png) 

![lift up error out of action 'signup'](./pic/39.png) 

## **Spinner**

![create state 'isLoading' and curve static UI of loading status](./pic/40.png) 

![update isLoading](./pic/41.png)

- The key to this lecture is that the states of the Spinner and Error message UI must be in the component, but the actual fetching is handled in Vuex store.
