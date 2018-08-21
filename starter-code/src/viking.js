// Soldier
// function Soldier() {}

class Soldier{
  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }
 
  attack(){
    return this.strength
  };
 
  receiveDamage(damage){
this.health -= damage
  };
 
 }


// // Viking
// function Viking() {}

class Viking extends Soldier {
constructor(nameArg, healthArg, strengthArg,) {
super(healthArg, strengthArg)
this.name = nameArg
}

attack() {
  return this.strength
}

receiveDamage(damage) {
  this.health -= damage
if(this.health > 0) {
return `${this.name} has received ${damage} points of damage`
} else (damage < 0); {
  return `${this.name} has died in act of combat`
}
}

battleCry() {
return `Odin Owns You All!`
}

}

// Saxon
// function Saxon() {}

class Saxon extends Soldier {
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0){
return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
// function War() {}

class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
    }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    this.saxon = 
  }
  saxonAttack(){}
  showStatus(){}
}