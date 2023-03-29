const express = require("express");
const cors = require('cors');
const contactsRouter = require("./app/routes/contact.route");
const account = require('./app/routes/account.route')
const ApiError = require("./app/api-error");

const app = express();
   
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcom to contact book application." });
});

app.use("/api/contacts", contactsRouter);
app.use("/account", account);


app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
    
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;