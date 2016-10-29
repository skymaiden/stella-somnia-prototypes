// The Game state is the actual game where the fun takes place ^^.

var StellaSomnia = StellaSomnia || {};

StellaSomnia.Game = function() {};

StellaSomnia.Game.prototype = {
  onInputDown: function(pointer) {
    // Save these for swipe detection
    this.swipeStartX = pointer.clientX;
    this.swipeStartY = pointer.clientY;

    // Move left on tap left
    if (pointer.clientX < this.game.stage.width / 2) {
      this.player.scale.setTo(-1, 1);
      this.player.body.velocity.x = -100;
    }
    // Move right on tap right
    else {
      this.player.scale.setTo(1, 1);
      this.player.body.velocity.x = 100;
    }
  },

  onInputUp: function(pointer) {
    var swipeMinDistance = 50;
    var swipeEndX        = pointer.clientX;
    var swipeEndY        = pointer.clientY;

    var swipedLeft  = swipeEndX < this.swipeStartX - swipeMinDistance;
    var swipedRight = swipeEndX > this.swipeStartX + swipeMinDistance;
    var swipedUp    = swipeEndY < this.swipeStartY - swipeMinDistance;
    var swipedDown  = swipeEndY > this.swipeStartY + swipeMinDistance;
    var swipedAny   = swipedLeft || swipedRight || swipedUp || swipedDown;

    if (swipedAny && this.player.body.blocked.down) {
      this.player.body.velocity.y = -1200;
    }
  },

  // ----------------------------------------------------------------------

  preload: function() {

  },

  create: function() {
    this.player = this.game.add.sprite(100, 200, 'player');
    this.player.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.body.gravity.y = 3000;
    this.player.body.velocity.x = 100;

    this.game.input.onDown.add(this.onInputDown, this);
    this.game.input.onUp.add(this.onInputUp, this);
  },

  update: function() {

  },

  render: function() {

  }
};
