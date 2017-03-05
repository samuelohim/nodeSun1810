const eo = require('express');
app = eo();
port = process.env.PORT || 8080;

const expressLayouts = require('express-ejs-layouts');

app.use(eo.static(__dirname + '/public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(require('./app/router.js'));

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});