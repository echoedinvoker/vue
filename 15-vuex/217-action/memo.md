## **If the method of mutations requires a delay in execution**

> Sometimes the method of mutations must be delayed, that is, asynchronous, the following is a very simple setTimeout example, the actual case is usually waiting for the HTTP response and so on.

![Alt if mutations method need to delay launch](pic/01.jpg)

## **Concept of Actions**

> To keep mutations fully synchronized, Vue introduced the concept of Actions.

![Alt concept of actions](pic/02.jpg)

## **Practice of Actions**

### _to keep mutations synchronous_

![Alt insert actions for ansynchronous logic](pic/03.jpg)

### _every mutations need actions_

> So even though the method of mutations is inherently synchronous, we must generate a method of actions to trigger it.

![Alt every mutations need actions to trigger](pic/04.jpg)
