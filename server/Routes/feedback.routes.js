const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryTask = 'SELECT * FROM "feedback";'
    pool.query(queryTask)
    .then((result) => {
        console.log('WE ARE IN GET REQUEST IN ROUTER', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('THERE IS AN ERORORROR IN ROUTER GET REQUEST', error);
        alert('GO GET YOUR STUFF TOGEThER');
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const newFeedback = req.body;
    const queryTask = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryTask, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
        console.log('WE ARE IN POST REQUEST IN ROUTER', result);
    }).catch((error) => {
        console.log('THERE IS AN ERORORROR IN ROUTER POST REQUEST', error);
        alert('GO GET YOUR STUFF TOGEThER');
        res.sendStatus(500);
    })
})

module.exports = router;