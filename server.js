const path = require('path');
const express = require('express');
const session = require('express-session');
//exphbs is like a build a bear templating engine
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: `I'm Gonna Wreck-it`,
    cookie: {maxAge: 120000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));


// force true every time server restarts it restarts the cookies
// turn it false when program is ready.
sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => 
    console.log(`Welcome to Tech Blog. Tuning in on ${PORT}!`));
});