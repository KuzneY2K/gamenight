import { PlayerController } from "../controllers/PlayersController.js"

export class Player {
    constructor(data) {
        this.name = data.name
        this.score = data.score
    }

    get PlayerTemplateCard() {
        return /*html*/`
    <div class="card w-50">
        <div class="card-body w-50">
            <span>Player: ${this.name} - Score: ${this.score} <button class="btn btn-danger" onclick="_scorePoint()">+</button></span>
        </div>
    </div>`
    }
}