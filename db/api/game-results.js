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
function sendResultGame({name,range,current_number,count_guess,computer_num_guess}){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO history_game(\`name\`,\`range\`,current_number,count_guess,computer_num_guess)
        VALUES (?,?,?,?,?);`,[name,range,current_number,count_guess,computer_num_guess], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    })
}


module.exports={
    getGameHistory,
    sendResultGame
}