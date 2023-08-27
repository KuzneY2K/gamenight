import { Player } from "./models/Player.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { PlayersController } from "./controllers/PlayersController.js"
import { playersService } from "./services/PlayersServices.js"

class ObservableAppState extends EventEmitter {
  page = ''


  players = loadState('players', [Player])

  // players = [
  //   new Player
  //     ({
  //       name: 'mark',
  //       score: 0
  //     }),
  //   new Player({
  //     name: 'david',
  //     score: 0
  //   }),
  //   new Player({
  //     name: 'imposter mark',
  //     score: 20
  //   })
  // ]

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
