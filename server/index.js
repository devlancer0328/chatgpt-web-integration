const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', chatRoutes)

dotenv.config();

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})