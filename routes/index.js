const path = require('path')
let bestMatch = require('../data/friend')

module.exports = app => {
    app.get('/survey', (req, res) => res.sendFile(path.join(__dirname, '../public/survey.html')))

    app.post('/survey', (req, res) => {
        bestMatch.findMatch(req.body)
        res.sendStatus(200)
    })
}