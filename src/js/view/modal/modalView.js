export class ModalView {
    elementModal
    modal
    parentElement

    constructor(modal, parent) {
        this.elementModal = document.createElement("div")
        this.modal = modal
        this.parentElement = parent
    }

    render() {
        this.elementModal.classList.add("modal__overlay") // Add style class
        const modalContent = document.createElement("div")
        const header = document.createElement("div")
        header.classList.add("modal__header")
        modalContent.classList.add("modal__content")
        header.appendChild(this.renderTitle()) // Insert title element
        header.appendChild(this.buttonClose()) // Insert button close element
        modalContent.appendChild(header)
        modalContent.appendChild(this.modal.content) // Insert content element
        this.elementModal.appendChild(modalContent)
        this.parentElement.prepend(this.elementModal) // Insert modal in parent node element
    }

    renderTitle() {
        const title = document.createElement("h3")
        title.classList.add("modal__title")
        title.innerHTML = this.modal.title

        return title
    }

    buttonClose() {
        const buttonClose = document.createElement("button")
        buttonClose.classList.add("modal__button")
        const icon = document.createElement("img")
        icon.setAttribute("src", this.modal.iconClose)
        icon.setAttribute("alt", "ícone fechar")
        buttonClose.appendChild(icon)
        buttonClose.addEventListener("click", () => this.close())

        return buttonClose
    }

    close() {
        this.elementModal.remove()
    }


}
