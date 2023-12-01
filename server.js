const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const avalibilityRoute = require("./routes/avalibility")

require("dotenv").config();

//creates express app for us
const app = express();
//listen for a request port number or env.port
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/avalibility',avalibilityRoute)

//connect to data base
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongoDB connection established')
})

app.listen(port, () => {
    console.log(`Server up on port: ${port}`)
});

