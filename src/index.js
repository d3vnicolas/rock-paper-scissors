import { ButtonPlay } from "./js/model/button-play/index.js"
import { ScoreBoard } from "./js/model/score-board/index.js"
import { ButtonsPlayView } from "./js/view/buttons-play/index.js"
import { ScoreBoardView } from "./js/view/score-board/index.js"

const score = new ScoreBoard("Pedra Papel Tesoura")
const buttonRock = new ButtonPlay("pedra", "blue", "./public/images/icon-rock.svg") 
const buttonPaper = new ButtonPlay("papel", "red", "./public/images/icon-paper.svg") 
const buttonScissor= new ButtonPlay("tesoura", "yellow", "./public/images/icon-scissors.svg") 

const scoreView = new ScoreBoardView(score)
const buttonsView = new ButtonsPlayView([buttonRock, buttonPaper, buttonScissor])

scoreView.render()
buttonsView.render()