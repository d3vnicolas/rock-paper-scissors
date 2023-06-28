export class Modal {
    title
    content
    
    constructor(title, content) {
        this.title = title
        this.content = content
    }

    /**
     * @returns {String} Modal's title
     */
    get title(){
        return this.title
    }

    /**
     * @param {String} newTitle 
     */
    set title(newTitle) {
        this.title = newTitle
    }

    /**
     * @returns {Node} Modal's content
     */
    get content() {
        return this.content
    }

    /**
     * @param {Node} newContent
     */
    set content(newContent) {
        this.content = newContent
    }
}