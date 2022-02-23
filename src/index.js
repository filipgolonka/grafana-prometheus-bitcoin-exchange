const express = require('express');
const got = require('got');
const app = express();
const port = 4000;

const url = 'https://api.coindesk.com/v1/bpi/currentprice/PLN.json';

app.get('/', async (req, res) => {
    const data = await got.get(url).json();

    res.send(`node_bitcoin_usd ${data.bpi.USD.rate_float}\nnode_bitcoin_pln ${data.bpi.PLN.rate_float}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
