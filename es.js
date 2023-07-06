import express from 'express'


const appis = () => {
    const port = 5000
    const app = express()

    app.listen(port, () => {
        console.log('port is listening on port 5000')
    })

    app.get('/', (req, res) => {
        res.json({ wps: 'hello world' })
    })
    console.log('first')
}
export default appis
