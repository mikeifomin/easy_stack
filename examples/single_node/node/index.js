const express = require('express')
const app = express()

app.get('/',function(req,res){
  res.end('ok')
})
app.listen(process.env.PORT)
