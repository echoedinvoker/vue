## **Purpose: change source(parent)'s data from child component**

![Alt purpose](pic/05.jpg)

## **Emit custom event from child component, and set Listener in parent**

![Alt emit event from child, set listener in parent](pic/06.jpg)

- The point of the child component is to issue a custom event only using this.$emit.
- The listener and methods functions are in the parent.

## **Set identifier to tell which data need to be influenced**

![Alt set identifier to tell which friend](pic/07.jpg)

- The point is that the second and subsequent arguments of this.$emit can carry data to the parent.
  - we carry identifier(friend id) to parent to tell which friend data need to be changed in this case.
