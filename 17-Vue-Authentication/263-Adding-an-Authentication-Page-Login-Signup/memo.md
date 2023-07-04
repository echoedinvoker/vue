## **Curve static UI of UserAuth page**

![curve/create static UI of auth form page](./pic/08.png) 

## **Implement two mode of form (login/sign up)**

![demand: captions of buttons will change](./pic/09.png) 

![create state and deriving states to render button captions](./pic/10.png) 

![create method to update state (not deriving states)](./pic/11.png) 

- computed is very similar to React's deriving state, so it's natural that the computed value cannot be changed.

## **Validate inputs and show message if got invalid submit**

![demand: validate email and password and show message for its result](./pic/12.png) 

![create state for message and conditionally render it](./pic/13.png) 

![control inputs](./pic/14.png) 

![create method to update 'formIsValid' by validate result](./pic/15.png) 

- If we think of the method as a setter or handler in React, it won't feel too complicated.

- We have already done complete validation in other forms of this project, so here is only a simple validation, because this chapter focuses on authentication.

- The more important purpose of state "mode" is to switch the type of request, but let's finish the UI first, and then start the request in the next lecture.
