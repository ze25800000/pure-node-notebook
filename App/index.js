const fs = require('fs');
class App {
    constructor() {
    }

    initServer() {
        return (req, res) => {
            fs.readFile('./public/index.html', 'utf8', (err, data) => {
                res.end(data);
            });
        }
    }
}

module.exports = App;