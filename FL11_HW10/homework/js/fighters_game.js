/* Your code goes here */

class Fighter {
  constructor(warrior) {
    this._name = warrior.name;
    this._damage = warrior.damage;
    this._hp = warrior.hp;
    this._agility = warrior.agility;
    this.wins = 0;
    this.losses = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getAgility() {
    return this._agility;
  }

  getHealth() {
    return this._hp;
  }

  attack(enemy) {
    const probability = (-enemy._agility + 100) / 100;
    const ourCase = Math.random().toFixed(2);
    
    if (probability >= ourCase) {
      // let warriorPower = this.getDamage();
      // let enemyHealth = enemy.getHealth();
      // enemyHealth -= warriorPower;
      // console.log(`${this.getName()} makes ${warriorPower} damage to ${enemy.getName()}`);
      return true;
    }
    console.log(`${this.getName()} attack missed`)
    return false;
  }

  logCombatHistory () {
    return `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`;
  }
  
}

const john = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const tom = new Fighter({name: 'Tom', damage: 40, hp: 100, agility: 15});

// console.log(john.getName());
// console.log(john.getDamage());
console.log(john.attack(tom));
console.log(john.logCombatHistory());