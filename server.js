const express = require('express'),
      routes = require('./routes/routes'),
      exphbs = require('express-handlebars');

const app = express();
app.use(express.static('./public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.use('/', routes);
app.listen(port, () => {
    console.log("App is running on PORT: ", port);
})