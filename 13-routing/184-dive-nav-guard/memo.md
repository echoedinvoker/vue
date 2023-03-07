## **Navigation Guard of Different Level**

> Navigation Guard can be implemented not only at the router object level, but also at the route and component level.

### _Global_

![Alt global beforeEach](pic/01.jpg)

### _Route_

![Alt route beforeEnter](pic/02.jpg)

### _Component_

![Alt comp beforeRouteEnter](pic/03.jpg)

## **Replace Watcher with beforeRouteUpdate or not?**

![Alt watch](pic/04.jpg)

- We can replace the watcher with another hook 'beforeRouteUpdate' that can be implemented in the component.
  - Because 'beforeRouteUpdate' is triggered by route update, so even if the component is reused, it will work if the route has been updated (suitable for this case).
  - Note that 'beforeRouteUpdate' is not the same as 'beforeRouteEnter' that we mentioned earlier, in fact there are lots of various hooks.

![Alt replace with beforeRouteUpdate](pic/05.jpg)

- Because over-reliance on route will reduce the versatility of the component, we prefer to use watcher to solve the problem in this case.
