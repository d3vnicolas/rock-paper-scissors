export class Button {
    content
    action
    selector

    constructor(content, action, selector) {
        this.content = content
        this.action = action
        this.selector = selector
    }

    /**
     * @returns {Node} node element button's content
     */
    get content() {
        return this.content
    }

    /**
     * @param {Node} newContent node element to content a button 
     */
    set content(newContent) {
        this.content = newContent
    }

    /**
     * @returns {Function} function to when button was click
     */
    get action() {
        return this.action
    }

    /**
     * @param {Function} newAction function to button click
     */
    set action(newAction) {
        this.action = newAction
    }

    /**
     * @returns {Array} Array of selector classes css
     */
    get selector() {
        return this.selector
    }

    /**
     * @param {Array} newSelector array with css classes of button
     */
    set selector(newSelector) {
        this.selector = newSelector
    }
}