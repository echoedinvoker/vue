const getAttackValue = function (max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    playerAttack() {
      const attackValue = getAttackValue(12, 5);
      this.monsterHealth -= attackValue;
      this.monsterAttack;
    },
    monsterAttack() {
      const attackValue = getAttackValue(15, 8);
      this.playerHealth -= attackValue;
    },
  },
});
