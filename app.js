const fs = require('fs')
const http = require('http')
const path = require('path')

const port = process.env.PORT || 5000

http
  .createServer(function (req, res) {
    if (req.url === '/') {
      fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        res.end(html)
      })
    } else if (req.url.match('.html$')) {
      let htmlPath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(htmlPath, 'UTF-8')
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fileStream.pipe(res)
    } else if (req.url.match('.txt$')) {
      let txtPath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(txtPath, 'UTF-8')
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      fileStream.pipe(res)
    } else if (req.url.match('.css$')) {
      let cssPath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(cssPath)
      res.writeHead(200, { 'Content-Type': 'text/css' })
      fileStream.pipe(res)
    } else if (req.url.match('.avif$')) {
      let avifPath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(avifPath)
      res.writeHead(200, { 'Content-Type': 'image/avif' })
      fileStream.pipe(res)
    } else if (req.url.match('.js$')) {
      let jsPath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(jsPath)
      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      fileStream.pipe(res)
    } else if (req.url.match('.webp$')) {
      let imagePath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/webp' })
      fileStream.pipe(res)
    } else if (req.url.match('.jpg$')) {
      let imagePath = path.join(__dirname, 'public', req.url)
      let fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/jpg' })
      fileStream.pipe(res)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end('No Page Found')
    }
  })
  .listen(port)
