const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();




app.get('*', (req, res)=>{
    res.redirect(301, 'https://www.instagram.com/webquery/?hl=en' + req.path)
})

app.listen(PORT, ()=>{
    console.log(`App started on port: ${PORT}`)
})