var cassandra = require('cassandra-driver');

module.exports = new cassandra.Client({contactPoints: ['cassandra-39ee5ac0-akash-7b67.aivencloud.com:18267'], keyspace: 'services_ks'});
