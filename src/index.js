import { Button } from "./js/model/button/button.js"
import { ScoreBoard } from "./js/model/score-board/scoreBoard.js"
import { Modal } from "./js/model/modal/modal.js"
import { ButtonView } from "./js/view/buttons-play/buttonView.js"
import { ScoreBoardView } from "./js/view/score-board/scoreBoardView.js"
import { ModalView } from "./js/view/modal/modalView.js"
import { NPC } from "./js/model/npc.js"

//Instance score board
const score = new ScoreBoard("Pedra<br/> Papel<br/> Tesoura")
const scoreView = new ScoreBoardView(score)
const npc = new NPC(score, scoreView);

// Button rock
let contentRock = document.createElement("img")
contentRock.setAttribute("src", "./public/images/icon-rock.svg")
const buttonRock = new Button(
    contentRock,
    e => npc.start(e.currentTarget),
    ["button__rock", "button__play"],
    "rock"
)

// Button paper
let contentPaper = document.createElement("img")
contentPaper.setAttribute("src", "./public/images/icon-paper.svg")
const buttonPaper = new Button(
    contentPaper,
    e => npc.start(e.currentTarget),
    ["button__paper", "button__play"],
    "paper"
)

// Button scissors
let contentScissors = document.createElement("img")
contentScissors.setAttribute("src", "./public/images/icon-scissors.svg")
const buttonScissors = new Button(
    contentScissors,
    e => npc.start(e.currentTarget),
    ["button__scissors", "button__play"],
    "scissors"
)

// Content modal rules
const contentModal = document.createElement("img")
contentModal.setAttribute("src", "./public/images/image-rules.svg")
contentModal.setAttribute("alt", "Regras")

// Action modal button
const modalRules = new Modal("Regras", "./public/images/icon-close.svg", contentModal)
const ModalRulesView = new ModalView(modalRules, document.querySelector("body"))

// Button rules modal
const contentButtonRules = document.createElement("span")
contentButtonRules.innerHTML = "Regras"
contentButtonRules.classList.add("button__rules--content")
const buttonRules = new Button(
    contentButtonRules,
    () => ModalRulesView.render(),
    ["button__rules"]
)

const buttonsPlayView = new ButtonView([buttonRock, buttonPaper, buttonScissors], document.querySelector("[data-attr=buttons-list]"))
const buttonRulesView = new ButtonView([buttonRules], document.querySelector("footer .button__rules--wrapper"))

scoreView.render()
buttonsPlayView.render()
buttonRulesView.render()