const connection = require('../config');

function getGameHistory(){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM guessthenumber.history_game;`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    })
}

module.exports={
    getGameHistory
}