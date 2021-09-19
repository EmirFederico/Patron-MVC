const path = require("path")

const mainController = {
    index: (req, res) => {
        res.render(path.join(__dirname, "../views/home/home.ejs"))
    }
}

module.exports = mainController;