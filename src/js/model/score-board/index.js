export class ScoreBoard {
    title
    #score

    constructor(title) {
        this.title = title
        this.score = 0
    }

    get title() {
        return this.title
    }

    /**
     * @param {String} newTitle
     */
    set title(newTitle) {
        this.title = newTitle
    }

    scoreUp() {
        this.#score += 1
    }

    scoreDown() {
        this.#score -= 1
    }

    get score() {
        return this.#score
    }

    /**
     * @param {number} newScore
     */
    set score(newScore) {
        this.#score = newScore
    }
}
