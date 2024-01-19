import { connection } from "../../config/connection.js";

async function testConnection() {
    try {
        await connection.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    } finally {
        await connection.close();
    }
}

testConnection();

// Run node tests\componentTests\dbConnection.test.js to test
// It is different to run node dbConnection.test.js inside the server\tests\componentTests path, will have error
// It is due to when you run the test from the tests\componentTests directory, the relative path "../../config/connection.js" is interpreted differently
// It's trying to find the config/connection.js relative to the current working directory (tests\componentTests), which might not exist
