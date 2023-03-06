## **Implement Error Msg for technical error on Form component**

> This section is almost exactly the same as the previous lecture.

![Alt require error message of technical error on form component](pic/01.jpg)

![Alt set error message for technical err](pic/02.jpg)

![Alt render it](pic/03.jpg)

![Alt test it](pic/04.jpg)

## **What about Server side error**

> Technical error is an error from browser, while Server side error is generated in Server, so there is no error in Vue app, but some error code like 400, 500 in response as a hint.

### _why 'catch' not to work in this case_

![Alt what about server side error](pic/05.jpg)

### _Throw/Create Error on my own_

> As mentioned above, Server side errors are not sent to the Vue app, so we have to generate/throw the error ourselves in the Vue app.

![Alt throw error on my own](pic/06.jpg)

- The point is that we can use 'response.ok' to know if there is any error on the server side, so that we can do the following process.

### _Result test_

![Alt result](pic/07.jpg)
