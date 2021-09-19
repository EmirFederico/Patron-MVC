const path = require("path")

const aboutController = {
    description: (req, res) => {
        res.sendFile(path.join(__dirname,"../views/about/about.html"))
    }
}

module.exports = aboutController;
