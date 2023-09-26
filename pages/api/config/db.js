// db.js
import mysql  from 'mysql';

const config = {
    user: 'root',
    password: '',
    // server: 'ASIF-PC',
    server: 'localhost',
    database: 'carrentals',
    // options: {
    //     encrypt: false, // Disable encryption
    //     trustServerCertificate: true, // Trust the self-signed certificate (not recommended for production)
    //   },
//     user: 'your_db_user',
//   password: 'your_db_password',
//   server: 'your_db_server', // e.g., 'localhost' or IP address
//   database: 'your_db_name',
};

// const pool = new mysql.ConnectionPool(config);

const connection = mysql.createConnection(config);
connection.connect()


export default connection;