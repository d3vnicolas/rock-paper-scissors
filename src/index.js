import { ButtonPlay } from "./js/model/button-play/buttonPlay.js"
import { ScoreBoard } from "./js/model/score-board/scoreBoard.js"
import { Modal } from "./js/model/modal/modal.js"
import { ButtonsPlayView } from "./js/view/buttons-play/buttonsPlayView.js"
import { ScoreBoardView } from "./js/view/score-board/scoreBoardView.js"
import { ModalView } from "./js/view/modal/modalView.js"

const score = new ScoreBoard("Pedra Papel Tesoura")
const buttonRock = new ButtonPlay("pedra", "blue", "./public/images/icon-rock.svg") 
const buttonPaper = new ButtonPlay("papel", "red", "./public/images/icon-paper.svg") 
const buttonScissor= new ButtonPlay("tesoura", "yellow", "./public/images/icon-scissors.svg") 

const contentModal = document.createElement("img")
contentModal.setAttribute("src", "./public/images/image-rules.svg")
contentModal.setAttribute("alt", "Regras")
const elementBody = document.querySelector("body");
const modalRules = new Modal("Regras", "./public/images/icon-close.svg", contentModal)

const scoreView = new ScoreBoardView(score)
const buttonsView = new ButtonsPlayView([buttonRock, buttonPaper, buttonScissor])
const modalView = new ModalView(modalRules, elementBody)

scoreView.render()
buttonsView.render()
modalView.render()