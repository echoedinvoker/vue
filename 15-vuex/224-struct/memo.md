## **main.js too fat because of store growing**

![Alt main.js too fat](pic/01.jpg)

- The following describes the various levels of separation structures.

## **Separate store**

![Alt split store](pic/02.jpg)

## **Separate module**

![Alt to store/index](pic/03.jpg)

![Alt to store/counter/index](pic/04.jpg)

## **Separate features**

> it means that mutations, actions, and getters are also separated into their own files.

![Alt split to features from index](pic/05.jpg)

![Alt import/use features back](pic/06.jpg)

- A module can also separate out features (mutations, actions, getters) as above, but not necessarily meaningfully.

- The degree of separation depends on the size of the project and the needs, and it is entirely reasonable to separate to store.js only.
