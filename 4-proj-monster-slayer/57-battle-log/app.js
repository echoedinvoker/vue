const getAttackValue = function (max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      playRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterHealthWidth() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthWidth() {
      return { width: this.playerHealth + "%" };
    },
    maySpecialAttackAvailable() {
      return this.playRound % 3 !== 0 || this.playRound === 0;
    },
  },
  methods: {
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.playRound = 0;
      this.winner = null;
      logMessages = [];
    },
    playerAttack() {
      this.playRound++;
      const attackValue = getAttackValue(12, 5);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.addNewLog("player", "attack", attackValue);
      this.monsterAttack();
    },
    playerSpecialAttack() {
      this.playRound++;
      const attackValue = getAttackValue(20, 10);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.addNewLog("player", "special-attack", attackValue);
      this.monsterAttack();
    },
    playerHeal() {
      this.playRound++;
      const healValue = getAttackValue(20, 10);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addNewLog("player", "heal", healValue);
      setTimeout(this.monsterAttack, 500);
    },
    playerSurrender() {
      this.winner = "monster";
    },
    monsterAttack() {
      const attackValue = getAttackValue(15, 8);
      if (this.playerHealth - attackValue < 0) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      }
      this.addNewLog("monster", "attack", attackValue);
      if (this.playerHealth === 0 && this.monsterHealth === 0) {
        this.winner = "draw";
      } else if (this.playerHealth === 0) {
        this.winner = "monster";
      } else if (this.monsterHealth === 0) {
        this.winner = "player";
      }
    },
    addNewLog(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
