const start = require('./data/api/server.js');

const port = 6500;
start.listen(port, () => console.log(`Server is running on port ${port}`));