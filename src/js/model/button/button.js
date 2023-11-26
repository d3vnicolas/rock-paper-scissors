export class Button {
    content
    action
    selectors
    value

    constructor(content, action, selectors, value) {
        this.content = content
        this.action = action
        this.selectors = selectors
        this.value = value
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
    get selectors() {
        return this.selectors
    }

    /**
     * @param {Array} newSelectors array with css classes of button
     */
    set selectors(newSelectors) {
        this.selectors = newSelectors
    }

    /**
     * @returns {String} String value
     */
    get value() {
        return this.value
    }

    /**
     * @param {String} newValue string with value
     */
    set value(newValue) {
        this.value = newValue
    }
}