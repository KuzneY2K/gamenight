import { Player } from "../models/Player.js";
import { AppState } from "../AppState.js";
import { PlayersController } from "../controllers/PlayersController.js";
import { saveState } from "../utils/Store.js";

function savePlayers() {
    saveState('players', AppState.players)
}

class PlayersServices {

    addPlayer(formData) {
        let newPlayer = new Player(formData)
        newPlayer.score = 0
        AppState.players.push(newPlayer)
        console.log(AppState.players)
        savePlayers()
    }

    scorePoint(playerName) {
        let foundPlayer = AppState.players.find(player => player.name == playerName)
        foundPlayer.score += 1
        savePlayers()
    }

}

export const playersService = new PlayersServices()