### Setup
*   install nodejs and npm
*   go to icecream  
*   npm install
### Run
*   edit start.js    
        var connect    = require('connect')
        var icecream   = require('./lib/icecream');

		icecream.createServer();
		icecream.use(connect.query());
		icecream.use(connect.bodyParser());
		icecream.use(connect.cookieParser());
		icecream.use(connect.session({ secret:'DFJLK8DFGJ933JKLFGJ2'}));
		icecream.listen(3000);

		icecream.set('defaultEngine', 'jade');
		icecream.set('appRoot',  __dirname +'/app');
		icecream.set('debug', true);
* node start.js		
