const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp) => {
    resp.send('<h1>Parabéns, você está evoluindo!')
})

app.listen(port, () => {
    console.log('Running in port', port)
})