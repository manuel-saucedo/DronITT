require ("dotenv").config()
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// bodyparser
const bodyParser = require("body-parser");
//
const dbConnect = require('./config/mongo');
const app = express()
const userRoutes = require('./routes/user')
const plantRoutes = require('./routes/plants')
app.use(bodyParser.json())

//rutes
app.use(userRoutes)
app.use(plantRoutes)


app.use(cors());
app.use(helmet());

// settings
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`) //http:api.ittGreenDron.xyz:

})

dbConnect()
