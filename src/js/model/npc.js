export class NPC {
  possibilities

  constructor () {
    this.possibilities = ['rock', 'paper', 'scissors'];
  }

  start(buttonPlay) {
    let npcPlay = this.possibilities[Math.floor(Math.random() * 3)]
    let userPlay = buttonPlay.getAttribute("value");
    
    if (npcPlay === userPlay) {
      this.tie()
    } else if (
        (userPlay === "rock" && npcPlay === "scissors") || 
        (userPlay === "scissors" && npcPlay === "paper") ||
        (userPlay === "paper" && npcPlay === "rock")
      ) {
        this.win()
      } else {
        this.lose()
      }
  }

  win() {
    alert("Ganhou.")
  }

  lose() {
    alert("Perdeu.")
  }

  tie() {
    alert("Empate.")
  }
}