import { Button } from "./js/model/button/button.js"
import { ScoreBoard } from "./js/model/score-board/scoreBoard.js"
import { Modal } from "./js/model/modal/modal.js"
import { ButtonsPlayView } from "./js/view/buttons-play/buttonsPlayView.js"
import { ScoreBoardView } from "./js/view/score-board/scoreBoardView.js"
import { ModalView } from "./js/view/modal/modalView.js"

//Instance score board
const score = new ScoreBoard("Pedra Papel Tesoura")

// Button rock
let contentRock = document.createElement("img")
contentRock.setAttribute("src", "./public/images/icon-rock.svg")
const buttonRock = new Button(contentRock, function(){void(0)}, ["button__rock", "button__play"])

// Button paper
let contentPaper = document.createElement("img")
contentPaper.setAttribute("src", "./public/images/icon-paper.svg")
const buttonPaper = new Button(contentPaper, function(){void(0)}, ["button__paper", "button__play"])

// Button scissors
let contentScissors = document.createElement("img")
contentScissors.setAttribute("src", "./public/images/icon-scissors.svg")
const buttonScissors = new Button(contentScissors, function(){void(0)}, ["button__scissors", "button__play"])

// Modal rules
const contentModal = document.createElement("img")
contentModal.setAttribute("src", "./public/images/image-rules.svg")
contentModal.setAttribute("alt", "Regras")

const scoreView = new ScoreBoardView(score)
const buttonsView = new ButtonsPlayView([buttonRock, buttonPaper, buttonScissors])

scoreView.render()
buttonsView.render()