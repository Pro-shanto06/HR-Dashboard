const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const candidateRoutes = require('./routes/candidateRoutes');

app.use(cors());

mongoose.connect("mongodb+srv://proshantosaha1999:W0ZsFvmK5dmk5ayU@cluster0.hwzdkym.mongodb.net/myDatabaseName?retryWrites=true&w=majority")
.then(async () => {
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/candidates', candidateRoutes);
