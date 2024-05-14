const Express = require('express');
const app = Express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/', require('./form'));

app.get('/', (req, res) => {
    res.send('server working');
});

app.listen(5000, () => {
    console.log('server listening on port ' + 5000);
});