var connect    = require('../../src/node_modules/connect');
var icecream   = require('../../src/lib/icecream');

icecream.createServer();

icecream.set('appRoot',  __dirname +'/app');
icecream.set('debug', true);

icecream.use(connect.session({ secret:'DFJLK8DFGJ933JKLFGJ2'}));

icecream.listen(3000);
