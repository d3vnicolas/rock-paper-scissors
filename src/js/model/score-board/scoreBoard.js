export class ScoreBoard {
    title
    #score

    /**
     * @param {String} title 
     */
    constructor(title) {
        this.title = title
        this.score = 0
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.title
    }

    /**
     * @param {String} newTitle
     */
    set title(newTitle) {
        this.title = newTitle
    }

    /**
     * @void
     */
    scoreUp() {
        this.#score += 1
    }

    /**
     * @void
     */
    scoreDown() {
        this.#score -= 1
    }

    /**
     * @returns {number}
     */
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
