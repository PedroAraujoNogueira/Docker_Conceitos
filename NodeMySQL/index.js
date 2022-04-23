const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db-mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
} 

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Pedro 3')`
connection.query(sql)
connection.end()

app.get('/', (req, resp) => {
    resp.send('<h1>Parabéns, você está evoluindo!')
})

app.listen(port, () => {
    console.log('Running in port', port)
})