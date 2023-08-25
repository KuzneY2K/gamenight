import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { PlayersServices } from "../services/PlayersServices.js";
import { setHTML } from "../utils/Writer.js";


function _drawPlayers() {
    let players = AppState.players
    console.log(players)
    let template = ''
    players.forEach(player => template += player.PlayerTemplateCard)
    setHTML('players-container', template)
}

export class PlayerController {
    constructor() {
        function _scorePoint() {
            console.log('clicked')
        }
        _drawPlayers()
        _scorePoint()
    }
}