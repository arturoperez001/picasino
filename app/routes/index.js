const express = require('express');
const router = express.Router();

router.use(require('./empresas'));

router.get('/', function(req, res){
    var pageInfo = {
        pageName: 'Colacionator',
        pageTitle: 'Panel de control'
    };
    var userInfo = {
        userName : 'Asdrubal'
    };
    res.render('panel',{
        pageInfo : pageInfo,
        userInfo: userInfo
    });
});

router.get('/login', function(req, res){
    res.render('login');
});

router.get('/panel', function(req, res){
    //var pageInfo = req.app.pageInfo;
    var pageInfo = {
        pageName: 'Colacionator',
        pageTitle: 'Panel de control'
    };
    var userInfo = {
        userName : 'Asdrubal'
    };

    res.render('panel',{
        pageInfo : pageInfo,
        userInfo: userInfo
    });
    //console.log(userName);
});

module.exports = router;