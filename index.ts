import express = require('express')
import cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080
const API_URL = "http://localhost:3000"

//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: API_URL,
    preflightContinue: false
};

//use cors middleware
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('hi')
})


app.listen(PORT, () => {
    console.log('server started!');
});