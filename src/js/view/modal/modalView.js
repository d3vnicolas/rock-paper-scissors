export class ModalView {
    elementModal
    modal
    parentElement

    constructor(modal, parent) {
        this.elementModal = document.createElement("div")
        this.parentElement = parent
        this.modal = modal
    }

    render() {
        this.elementModal.classList.add("modal") // Add style class 
        this.elementModal.appendChild(this.renderTitle()) // Insert title element
        this.elementModal.appendChild(this.modal.content) // Insert content element
        this.parentElement.prepend(this.elementModal) // Insert modal in parent node element
    }

    renderTitle() {
        const title = document.createElement("h3")
        title.classList.add("modal__title")
        title.innerHTML = this.modal.title

        return title
    }

    destroy() {
        this.elementModal.remove()
    }
}
