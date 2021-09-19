const path = require("path")

const aboutController = {
    description: (req, res) => {
        res.render(path.join(__dirname,"../views/about/about.ejs"))
    }
}

module.exports = aboutController;
