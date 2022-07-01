const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req,res) => {
    res.send('test');
})

app.listen(process.env.PORT || port, () => console.log(`Listening at http://localhost:${port}`))