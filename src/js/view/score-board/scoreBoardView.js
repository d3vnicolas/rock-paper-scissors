export class ScoreBoardView{
    scoreBoard
    divElement

    constructor(scoreBoard) {
        this.divElement = document.querySelector("[data-attr=score-board]")
        this.scoreBoard = scoreBoard
    }

    
    render() {
        this.divElement.innerHTML = ""
        this.divElement.innerHTML = `
            <div class="score-board__block">
                <h1 class="score-board__title">
                    ${this.scoreBoard.title}
                </h1>
            </div>
            <div class="score-board__block">
                <div class="score-board__score">
                    <span class="score-board__score--label">
                        score
                    </span>
                    <span class="score-board__score--score">
                        ${this.scoreBoard.score}
                    </span>
                </div>
            </div>
        `
    }   
}
