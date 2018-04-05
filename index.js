const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .engine('html', require('ejs').renderFile)
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/form-builder', (req, res) => res.render('pages/form-builder'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
