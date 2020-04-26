
const { Probot } = require('probot');
const app = require('./lib/index.js');

// pass a probot app as a function
(async () => {
    await Probot.run(app);
})();
