export class ButtonPlay {
    value
    color
    icon

    constructor(value, color, icon) {
        this.value = value
        this.color = color
        this.icon = icon
    }

    /**
     *  @return value of button
     */
    get value(){
        return this.value
    }

    /**
     * @param {String} newValue
     */
    set value(newValue) {
        this.value = newValue
    }

    /**
     *  @return color value button
     */
    get color(){
        return this.color
    }

    /**
     * @param {String} newColor
     */
    set color(newColor) {
        this.color = newColor
    }

    /**
     *  @return path of icon button
     */
    get icon(){
        return this.icon
    }

    /**
     * @param {String} newPathIcon
     */
    set icon(newPathIcon) {
        this.value = newPathIcon
    }
}