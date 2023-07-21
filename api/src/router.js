const exercise1 = require('./handlers/exercise1')
const exercise2 = require('./handlers/exercise2')

module.exports = (app) => {
    app.post('/exercise1', exercise1)
    app.post('/exercise2', exercise2)
}