new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame () {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns = []
    },
    attack () {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.logAttack(true, damage)
      if (this.checkWin('monsterHealth')) return;

      this.monsterAttacks()
    },
    specialAttack () {
      let damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.logAttack(true, damage)
      if (this.checkWin('monsterHealth')) return;

      this.monsterAttacks()
    },
    heal () {
      this.playerHealth = Math.min(100, this.playerHealth + 10)
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals for 10`
      })
      this.monsterAttacks()
    },
    giveUp () {
      this.gameIsRunning = false
    },
    logAttack (isPlayer, damage) {
      this.turns.unshift({
        isPlayer,
        text: `${isPlayer == true? 'Player' : 'Monster'} hits \
${isPlayer == true ? 'Monster' : 'Player'} for ${damage}`
      })
    },
    monsterAttacks () {
      let damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.logAttack(false, damage)
      this.checkWin('playerHealth')
    },
    calculateDamage (min, max) {
      return Math.round(Math.random()*(max-min)) + min
    },
    checkWin (turn) {
      if (this[turn] <= 0) {
        if (confirm(`You ${turn == 'monsterHealth'? 'won' : 'lost'}! Start a new game?`)) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true;
      }
      return false
    }
  }
})
