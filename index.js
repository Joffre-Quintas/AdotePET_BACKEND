const app = require('./app');
const startDB = require('./config/db')
const port = process.env.PORT || 3000

startDB()
app.listen(port, console.log('Servidor rodando...'))