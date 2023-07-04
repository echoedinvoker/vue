## **How auth work in Vue/SPA Apps**

> Our case uses Vue framework on the front end and firebase on the back end, but in fact the following concept map is popular to any SPA Apps and any backend.

![How auth work in Vue/SPA Apps](./pic/01.png) 

- Server has mix data
  
  - public data

  - restricted data

    - requests for it need attached token

- Only server can tell token is valid or not.

  - Because server generate it with secret key.

- Token is a very long string.

- Server generate token and send it to client (frontend)

  - Client store token in vuex or local storage.

- "Server does NOT care about clients"

  - it means server does NOT store any user login information.

  - traditional pattern will has a session to record status of user login, but modern pattern NOT.


## **Login/out not only impact requests**

- Token not only for attaching requests to get restricted data, but we can use it to change component appearance, too.

![not only impact requests](./pic/02.png) 
