var express = require('express')
var app = express()

app.use(express.static('./')).listen(4010)