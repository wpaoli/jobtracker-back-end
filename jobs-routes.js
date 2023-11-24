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
        console.log(res);
        res.status(201).send(result);
    });
});

router.delete('/job/:jobId', (req, res) => {
    const jobId = req.params.jobId;
    const sql = 'DELETE FROM Jobs WHERE job_id = ?';
    db.query(sql, jobId, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send(result);
    });
 });


 router.put('/job/:jobId', (req, res) => {
    const jobId = req.params.jobId;
    const { job_title, company, job_posting, date_applied, notes } = req.body;
    console.log(jobId, req.body)
    // console.log(res);
    // res.send(req.body)

    const sql = 'UPDATE Jobs SET job_title = ?, company = ?, job_posting = ?, date_applied = ?, notes = ? WHERE job_id = ?;'

    db.query(sql, [job_title, company, job_posting, date_applied, notes, jobId], (err, result) => {
        if (err) throw err;
        console.log(res);
        res.status(201).send(result);
    });
 });

module.exports = router

