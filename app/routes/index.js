const express = require('express');
const router  = express.Router();
const auth = require('../auth/auth.service');

//router.use(require('./empresas'));

router.get('/panel', auth.isAuthenticated(),function(req, res){
    
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
    //var pageInfo = req.app.pageInfo;
    var pageInfo = {
        pageName: 'Colacionator',
        pageTitle: 'Login'
    };
    var userInfo = {
        userName : 'Asdrubal'
    };

    res.render('login',{
        pageInfo : pageInfo,
        userInfo: userInfo
    });
});

router.get('/signup', function(req, res){
    //var pageInfo = req.app.pageInfo;
    var pageInfo = {
        pageName: 'Colacionator',
        pageTitle: 'Subcripcion'
    };
    var userInfo = {
        userName : 'Asdrubal'
    };

    res.render('signup',{
        pageInfo : pageInfo,
        userInfo: userInfo
    });
    //console.log(userName);
});
//*/
module.exports = router;