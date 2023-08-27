import { PlayersController } from "../controllers/PlayersController.js"
import { playersService } from "../services/PlayersServices.js"
import { AppState } from "../AppState.js"

export class Player {
  constructor(data) {
    this.name = data.name
    this.score = data.score
  }

  get PlayerTemplateCard() {
    return /*html*/`   
    <div class="card w-50 col-6">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.score}</p>
    <div class="d-flex flex-column align-items-center">
    <a class="btn btn-primary scoreBtn p-0 m-0 mt-2 px-2" onclick="app.PlayersController.scorePoint('${this.name}')">Score +</a>
    <a class="btn btn-primary scoreBtn p-0 m-0 mt-2 px-2" onclick="app.PlayersController.removePoint('${this.name}')">Score -</a>
    <a class="btn btn-danger deleteBtn p-0 m-0 mt-3 px-2" onclick="app.PlayersController.deletePlayer('${this.name}')">Remove Player</a>
    </div>
  </div>
</div>`
  }
}