const express = require('express')
require('dotenv').config()
const bodyparser = require('body-parser')

const port = process.env.PORT || 8000;

const app = express();
const router = require('./router');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json())
router(app)

app.listen(port, () => {
    console.log(`Server running on :${port}`)
})  
