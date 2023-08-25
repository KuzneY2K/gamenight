import { PlayerController } from "../controllers/PlayersController.js"

export class Player {
    constructor(data) {
        this.name = data.name
        this.score = data.score
    }

    get PlayerTemplateCard() {
        return /*html*/`   
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.score}</p>
    <a class="btn btn-primary scoreBtn">Score +</a>
  </div>
</div>`
    }
}