const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const fs = require('fs');
// const path = require('path');
const express = require('express');
// const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;
const app = express();

// use express.static to link up the files that were provided by client
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});