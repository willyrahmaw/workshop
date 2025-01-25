const express = require("express")
const app = express()
const port = 3001
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    let {data} = req.query;
    res.send(data ?? "Hello World"); 
})

app.get("/ganjilgenap", (req, res) => {
    let {value} = req.query;
    const data = value%2 == 0 ? "Bilangan Genap" : "Bilangan Ganjil";  
    res.send(data); 
})

app.listen(port, () => {
    console.log("listening to port " + port)
})
    