<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
    >
      <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="user-button" mode="out-in">
      <button @click="showUsers" v-if="!userIsVisible">Show Users</button>
      <!-- <button @click="hideUsers" v-if="userIsVisible">Hide Users</button> -->
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';

export default {
  components: {
    ListData,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      userIsVisible: false,
      enterAnimation: null,
      leaveAnimation: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      if (this.leaveAnimation) {
        clearInterval(this.leaveAnimation);
      }
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      // const interval = setInterval(() => {
      this.enterAnimation = setInterval(() => {
        el.style.opacity = round * 0.02;
        round++;
        if (round > 50) {
          // clearInterval(interval);
          clearInterval(this.enterAnimation);
          console.log('animation end');
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      if (this.enterAnimation) {
        clearInterval(this.enterAnimation);
      }
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 50;
      // const interval = setInterval(() => {
      this.leaveAnimation = setInterval(() => {
        round--;
        el.style.opacity = round * 0.02;
        if (round === 0) {
          // clearInterval(interval);
          clearInterval(this.leaveAnimation);
          console.log('animation end');
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    showUsers() {
      this.userIsVisible = true;
    },
    hideUsers() {
      this.userIsVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
  },
};
</script>

<style>
.user-button-enter-from,
.user-button-leave-to {
  opacity: 0;
}
.user-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.user-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.user-button-enter-to,
.user-button-leave-from {
  opacity: 1;
}

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  animation: side-fade 0.3s ease-out forwards;
}
</style>
