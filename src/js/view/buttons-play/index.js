export class ButtonsPlayView {
    buttons
    element

    constructor(buttons) {
        this.buttons = buttons
        this.element = document.querySelector("[data-attr=buttons-list]")
    }

    render() {
        this.element.innerHTML = ""
        this.buttons.forEach((button) => {
            this.element.appendChild(this.renderButton(button))
        })
    }

    renderButton(args) {
        const buttonElement = document.createElement("div")
        buttonElement.classList.add("buttons__button")
        
        buttonElement.innerHTML = `
            <img src="${args.icon}"/>
        `
        buttonElement.style.backgroundColor = args.color
        buttonElement.setAttribute("value", args.value)

        return buttonElement
    }
}
