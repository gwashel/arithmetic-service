const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000; 

app.use(cors());
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add', (req, res) => {
   
    const num1 = req.query.num1; ;
    const num2 = req.query.num2;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum});
});
app.listen(port);