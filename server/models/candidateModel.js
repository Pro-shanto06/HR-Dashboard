const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    experienced: { type: String, required: true },
    expectedSalary: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    status: { type: String, enum: ['shortlisted', 'rejected','In Process','On Hold','finalized']},
    jobTitle: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
