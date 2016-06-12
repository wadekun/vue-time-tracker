var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/mission';
var _db;

var ObjectID = require('mongodb').ObjectID;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

// 允许跨域请求
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // 允许任何源地址的请求
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

MongoClient.connect(mongoUrl, function (err, db) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('connected to mongo');
    _db = db;
    app.listen(8888, function () {
        console.log('server is running...');
    });
});

// 创建
app.post('/create', function (req, res, next) {
    // 获取前台发送数据
    var mission = req.body;
    // 选择 my_mission表
    var collection = _db.collection('my_mission');

    // 参数验证
    if (!mission.comment || !mission.totalTime || !mission.date) {
        res.send({errcode: -1, errmsg: 'params missed'});
        return;
    }

    // 插入数据
    collection.insert({comment: mission.comment, totalTime: mission.totalTime, date: mission.date}, function (err, ret) {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.send({errcode: 0, errmsg: 'ok'});
        }
    });
});

// 获取总时长
app.get('/time', function (req, res, next) {
    // 查询数据列表
    var collection = _db.collection('my_mission');
    var time = 0;
    // 查询出所有计划
    collection.find({}).toArray(function (err, ret) {
        if (err) {
            console.error(err);
            return;
        }

        // 查询所有计划累加时长
        ret.forEach(function (item, index) {
            time += +item.totalTime;
        });

        res.json({errcode: 0, errmsg: 'ok', time: time});
    });
});

// 获取列表
app.get('/time-entries', function (req, res, next) {
    var collection = _db.collection('my_mission');

    collection.find({}).toArray(function (err, ret) {
        if (err) {
            console.log(err);
            return;
        }

        res.json(ret);
    });
});

// 删除计划
app.delete('/delete/:id', function (req, res, next) {
    var _id = req.params.id;
    var collection = _db.collection('my_mission');
    console.log(_id);
    collection.remove({_id: new ObjectID(_id)}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send({errcode: 0, errmsg: 'ok'});
        }
    });
});

