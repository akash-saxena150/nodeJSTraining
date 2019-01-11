const fs = require('fs');
var cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('avnadmin', 'xe15saz3novi0vwv');
var client = new cassandra.Client({contactPoints: ['cassandra-39ee5ac0-akash-7b67.aivencloud.com:18267'],keyspace: 'demo', localDataCenter: 'aiven',
    sslOptions: {
        cert: fs.readFileSync(__dirname+'/ca.pem')
    },
    authProvider});

module.exports = {
    cassandra,
    client
}//ES6 convention. {name}