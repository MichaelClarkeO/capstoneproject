
// DEPENDENCIES

require("dotenv").config();
require('./config/db.connection');
const { PORT = 3000 } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const playerCtrls = require('./controller/player_controller');
const teamCtrls = require('./controller/team_controller');
const userCtrls = require('./controller/user_controller');
const commentCtrls = require('./controller/comments_controller')

// MiddleWare

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(express.static('public'));
app.use('/player', playerCtrls);
app.use('/team', teamCtrls);
app.use('/comment', commentCtrls)
app.use('/user', userCtrls)

// ROUTES

// create a test route


// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));