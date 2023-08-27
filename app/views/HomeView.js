export const HomeView = /*html*/ `  <section class="row container-fluid p-0 m-0">
    <div class="col-12 container-fluid p-0 m-0">
      <h2 class="fs-5 text-center">Game Night</h2>
      <form onsubmit="app.PlayersController.addPlayer()">
        <div class="form-group d-flex flex-column align-items-center">
          <label for="name">Enter Player Name</label>
          <input type="text" class="form-control w-25 m-2" id="name" name="name" placeholder="Enter player name." required>
        </div>
        <div class="button-container d-flex justify-content-center">
          <button class="btn btn-dark" type="submit">Add Players</button>
        </div>
      </form>
      <div id="players-container" class="my-3 text-center d-flex justify-content-center row">
      </div>
    </div>
  </section>`