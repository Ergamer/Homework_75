const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');





const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;


app.post('/encode/', (req, res) => {
    res.send(Vigenere.Cipher(req.body.password).crypt(req.body.message));
});

app.post('/decode/', (req, res) => {
    res.send(Vigenere.Decipher(req.body.password).crypt(req.body.message));
});

app.listen(port, () => {
    console.log(port)
});


