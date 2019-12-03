const fs = require('fs');

module.exports = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const data = `[${hour}:${minutes}:${seconds}] ${req.method} ${req.url} ${req.get("user-agent")}`;

    console.log(data);

    fs.appendFile("server.log", data + "\n", function(){});

    next();
}