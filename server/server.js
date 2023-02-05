const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

const feedback = require('./Routes/feedback.routes');
app.use('/feedback', feedback);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});