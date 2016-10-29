// General game settings are defined in the Boot state, and assets for the
// preload screen are loaded here. Nothing is shown to the user.

var StellaSomnia = StellaSomnia || {};

StellaSomnia.Boot = function() {};

StellaSomnia.Boot.prototype = {
  // Load assets for preload screen
  preload: function() {

  },

  // Define general settings
  create: function() {
    // Center game and set to screen size
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // Initiate the physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Set stage background colour
    this.game.stage.backgroundColor = '#f6cefe';

    // Launch the Preload state
    this.state.start('Preload');
  }
};
