const getAttackValue = function (max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      playRound: 0,
    };
  },
  computed: {
    monsterHealthWidth() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthWidth() {
      return { width: this.playerHealth + "%" };
    },
    maySpecialAttackAvailable() {
      return this.playRound % 3 !== 0 || this.playRound === 0;
      j;
    },
  },
  methods: {
    playerAttack() {
      this.playRound++;
      const attackValue = getAttackValue(12, 5);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
    },
    playerSpecialAttack() {
      this.playRound++;
      const attackValue = getAttackValue(20, 10);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
    },
    playerHeal() {
      this.playRound++;
      const healValue = getAttackValue(20, 10);
      // this.playerHealth += healValue;
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      // this.monsterAttack();
      setTimeout(this.monsterAttack, 500);
    },
    monsterAttack() {
      const attackValue = getAttackValue(15, 8);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
