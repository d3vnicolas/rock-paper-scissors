export class ButtonsPlayView {
    buttons
    parentElement

    constructor(buttons) {
        this.buttons = buttons
        this.parentElement = document.querySelector("[data-attr=buttons-list]")
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
        args.selector.forEach((selector) => {
            newButton.classList.add(selector)
        })

        return newButton
    }
}
