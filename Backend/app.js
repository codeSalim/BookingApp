const express = require('express')
const app = express()
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`Server Is Runing On Port ${process.env.PORT}`);
})