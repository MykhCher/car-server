const http = require('http');
// =====
const app = require('./src/app');
const { testData: {createTestData, clearAllData} } = require('./src/constants');


require('dotenv').config();


const httpServer = http.createServer(app);

const PORT = process.env.PORT;

httpServer.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});

// createTestData();
// clearAllData();