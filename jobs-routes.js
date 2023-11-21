const express = require('express');
const router = express.Router();
const db = require('./db');
const cors = require('cors') 
router.use(express.json());


const corsOptions = {
    // origin: '*',
    // methods: '*',
    // credentials: true,
    // optionsSuccessStatus: 204,
    // exposedHeaders: 'Content-Length'
};

router.use(cors());

// router.get('/', (req, res) => {
    
//     res.send('Hello Worlds!')
// });

router.get('/jobs', (req, res) => {
    const sql = 'SELECT * FROM Jobs';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

router.post('/job', (req, res) => {
    
    const { JobTitle, Company, JobPosting, DateApplied, Notes } = req.body;
    const sql = 'INSERT INTO Jobs (JobTitle, Company, JobPosting, DateApplied, Notes) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [JobTitle, Company, JobPosting, DateApplied, Notes], (err, result) => {
        if (err) throw err;
        res.status(201).send('Job added');
    });
});

module.exports = router

