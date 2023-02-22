const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Database Connect Sussessfuly!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch (error) {
        console.log("Cannot conect to the DB!", error);
        process.exit();
    }
}

startServer();