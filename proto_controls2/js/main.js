// The main entry point of the game.

var StellaSomnia = StellaSomnia || {};

StellaSomnia.game = new Phaser.Game(746, 420, Phaser.AUTO, '');

StellaSomnia.game.state.add('Boot', StellaSomnia.Boot);
StellaSomnia.game.state.add('Preload', StellaSomnia.Preload);
StellaSomnia.game.state.add('Game', StellaSomnia.Game);

StellaSomnia.game.state.start('Boot');
