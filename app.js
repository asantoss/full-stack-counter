const express = require('express');
const app = express();

var count = 5;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + `/public`))

app.post('/api/increment', function (req, res) {
    count++
    res.json(
        count
    )
})

app.post('/api/decrement', function (req, res) {
    console.log(req)
    console.log(req.params)
    console.log(req.body)
    if (count === 0) {
        res.json("Cannot go lower than 0")
    } else {
        count--
        res.json(count)
    }
})

app.get('/api/value', function (req, res) {
    res.json(count)
})

app.listen(3000, () => {
    console.log('Lisetning on port 3000')
})