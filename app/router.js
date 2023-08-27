import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { HomeView } from "./views/HomeView.js";
import { PlayersController } from "./controllers/PlayersController.js";


export const router = [
  {
    path: '',
    controller: PlayersController,
    view: HomeView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]