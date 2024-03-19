const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.get('/count', candidateController.getCandidateCounts);
router.get('/countByJobTitle/:jobTitle', candidateController.getCandidateCountsByJobTitle);
router.get('/candidates/:jobTitle/:status', candidateController.getCandidatesByJobTitleAndStatus);

module.exports = router;
