const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000
app.set('port', PORT);
app.use('/static', express.static(__dirname + '/static'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/main.html")
})

app.listen(PORT, () => {
    console.log(PORT)
})