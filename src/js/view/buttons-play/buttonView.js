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
        newButton.setAttribute("value", args.value)

        let elementBorder = document.createElement("div")
        elementBorder.classList.add("button__border")

        let elementWrapper = document.createElement("div")
        elementWrapper.classList.add("button__content")

        elementWrapper.appendChild(args.content)

        newButton.append(elementBorder)
        newButton.append(elementWrapper)

        newButton.addEventListener("click", (e) => args.action(e))
        args.selectors.forEach((selector) => {
            newButton.classList.add(selector)
        })

        return newButton
    }
}
