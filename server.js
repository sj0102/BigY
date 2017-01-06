// 사용 모듈 로드
var express = require('express'); // 웹서버 사용 .
var app = express();
var router = require('./router/main')(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
 
var server = app.listen(8080, function(){
    console.log("Express server has started on port 8080")
});

app.use(express.static('public'));