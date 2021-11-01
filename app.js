const mysql = require('mysql'); //mysqlと接続するために

//mysqlを操作するオブジェクトを作成
const connection = mysql.createConnection({
    //mysqlの接続情報を記述する
    host: 'localhost',
    user: 'root',
    passwor: '',
    database: 'node_test'
});

//mysqlに接続
connection.connect((err) => {
    //コールバック関数の引数でエラーを受け取れる
    //成功か失敗をしたら呼び出される
    if(err) {
        console.log('err');
        return;
    }
    console.log('success');
});

//sql文を実行できる
connection.query('SELECT * from users;', function(err, rows, fields) {
    //コールバック関数内でSQL文を実行した結果を受けっとって実行できる
    if(err) {
        console.log('err: ' + err);
    }
    console.log('name: ' + rows[0].name);
    console.log('id: ' + rows[0].id);
});

connection.end();　//sqlとの接続を終わる