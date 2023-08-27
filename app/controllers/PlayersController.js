import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"
import { playersService } from "../services/PlayersServices.js"


function _drawPlayers() {
    let players = AppState.players
    let template = ''
    players.forEach(player => template += player.PlayerTemplateCard)
    setHTML('players-container', template)
}

export class PlayersController {
    constructor() {
        _drawPlayers()
    }

    addPlayer() {
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        playersService.addPlayer(formData)
        _drawPlayers()
    }

    deletePlayer(playerName) {
        playersService.deletePlayer(playerName)
        _drawPlayers()
    }

    scorePoint(playerName) {
        playersService.scorePoint(playerName)
        _drawPlayers()
    }

    removePoint(playerName) {
        playersService.removePoint(playerName)
        _drawPlayers()
    }
}