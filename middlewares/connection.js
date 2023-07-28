var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: process.env.user,
    password: process.env.password,
    database: process.env.password,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  });

  module.exports = connection