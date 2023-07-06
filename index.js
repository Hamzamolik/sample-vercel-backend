import express from 'express'

const app = express()
const port = 5000

app.listen(port, () => {
    console.log('port is listening on port 5000')
})

app.get('/', (req, res) => {
    res.json({ wps: 'hello world' })
})
