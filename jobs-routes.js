const express = require('express');
const router = express.Router();
const db = require('./db');
const cors = require('cors') 
router.use(express.json());

router.use(cors());

router.get('/jobs', (req, res) => {
    const sql = 'SELECT * FROM Jobs';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

router.post('/job', (req, res) => {
    
    const { job_title, company, job_posting, date_applied, notes } = req.body;
    const sql = 'INSERT INTO Jobs (job_title, company, job_posting, date_applied, notes) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [job_title, company, job_posting, date_applied, notes], (err, result) => {
        if (err) throw err;
        res.status(201).send('Job added');
    });
});

module.exports = router

