// Game assets are loaded into memory in the Preload state. The preloading
// screen is shown to the user, which usually includes a progress loading bar or
// animation.

var StellaSomnia = StellaSomnia || {};

StellaSomnia.Preload = function() {};

StellaSomnia.Preload.prototype = {
  preload: function() {
    // Show loading screen

    // Load game assets
    this.load.image('player', 'assets/images/player.png');
  },

  create: function() {
    // Launch the Game state
    this.state.start('Game');
  }
};
