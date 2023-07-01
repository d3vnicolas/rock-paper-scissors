export class Modal {
    title
    iconClose
    content
    
    constructor(title, iconClose, content) {
        this.title = title
        this.iconClose = iconClose
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
     * @returns {String} Modal's icon close path
     */
    get iconClose(){
        return this.iconClose
    }

    /**
     * @param {String} newIconClose
     */
    set iconClose(newIconClose) {
        this.iconClose = newIconClose
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