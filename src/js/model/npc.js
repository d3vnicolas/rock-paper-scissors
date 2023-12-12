export class NPC {
  possibilities
  scoreBoard
  scoreBoardView

  /**
   * Constructor class
   * @param {Object} scoreBoard 
   */
  constructor (scoreBoard, scoreBoardView) {
    this.possibilities = ['rock', 'paper', 'scissors']
    this.scoreBoard = scoreBoard
    this.scoreBoardView = scoreBoardView
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
    this.scoreBoard.scoreUp()
    this.scoreBoardView.render()
    alert("Ganhou.")
  }

  lose() {
    this.scoreBoard.scoreDown()
    this.scoreBoardView.render()
    alert("Perdeu.")
  }

  tie() {
    alert("Empate.")
  }
}