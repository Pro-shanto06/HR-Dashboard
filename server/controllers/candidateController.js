const Candidate = require('../models/candidateModel');

exports.getCandidateCounts = async (req, res) => {
    try {
        const totalCount = await Candidate.countDocuments();
        const shortlistedCount = await Candidate.countDocuments({ status: 'shortlisted' });
        const rejectedCount = await Candidate.countDocuments({ status: 'rejected' });
        const onHoldCount = await Candidate.countDocuments({ status: 'On Hold' });
        const inProcessCount = await Candidate.countDocuments({ status: 'In Process' });
        const finalizedCount = await Candidate.countDocuments({ status: 'finalized' });

        res.json({
            totalCount,
            shortlistedCount,
            rejectedCount,
            onHoldCount,
            inProcessCount,
            finalizedCount
        });
    } catch (error) {
        console.error('Error fetching candidate counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




exports.getCandidateCountsByJobTitle = async (req, res) => {
    try {
        const { jobTitle } = req.params;
        const countsByStatus = await Candidate.aggregate([
            { $match: { jobTitle } },
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ]);
        const countsObject = {};
        let totalCount = 0;
        countsByStatus.forEach(({ _id, count }) => {
            countsObject[_id] = count;
            totalCount += count;
        });
        countsObject.total = totalCount;

        res.json(countsObject);
    } catch (error) {
        console.error('Error fetching candidate counts by job title:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




exports.getCandidatesByJobTitleAndStatus = async (req, res) => {
    try {
        let { jobTitle, status } = req.params;
        jobTitle = jobTitle.trim();

        let candidates;
        if (status.toLowerCase() === 'all') {
            candidates = await Candidate.find({ jobTitle });
        } else {
            candidates = await Candidate.find({ jobTitle, status });
        }

        res.json(candidates);
    } catch (error) {
        console.error('Error fetching candidates by job title and status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



