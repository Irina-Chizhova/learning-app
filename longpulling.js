const express = require('express');
const cors = require('cors');
const events = require('events');
const PORT=3000;

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());
app.get('get-messages', (req, res) => {
    emmiter.once('newMessage', (message) => {
        res.json(message);
    })
});

app.post('new-message', ((req, res) => {
    const message = req.body;
    emmiter.emit('newMessage', message);
    res.status(200)
}))

app.listen (PORT, ()=> console.log(`listening on port ${PORT}`));