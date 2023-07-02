export class ButtonView {
    buttons
    parentElement

    constructor(buttons, parentElement) {
        this.buttons = buttons
        this.parentElement = parentElement
    }

    render() {
        this.parentElement.innerHTML = ""
        this.buttons.forEach((button) => {
            this.parentElement.appendChild(this.renderButton(button))
        })
    }

    renderButton(args) {
        const newButton = document.createElement("button")
        newButton.appendChild(args.content)
        newButton.addEventListener("click", () => args.action())
        args.selectors.forEach((selector) => {
            newButton.classList.add(selector)
        })

        return newButton
    }
}
