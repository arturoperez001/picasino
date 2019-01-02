const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//const sequelize = require('sequelize');
const config = require('../server/config');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));


    const log = config.logger;

//    const Empresas = empresasService(config.mysql.client);

    router.get('/Empresas/', function (req, res){
        
        var pageInfo = {
            pageName: 'Colacionator',
            pageTitle: 'Agregar Empresa'
        };
        var userInfo = {
            userName : 'Asdrubal'
        };
        return res.render('./Empresas/Empresas',{
            pageInfo : pageInfo,
            userInfo: userInfo
        });
    });

    
    
    
    router.get('/Empresas/agregar', function(req, res){
        var pageInfo = {
            pageName: 'Colacionator',
            pageTitle: 'Agregar Empresa'
        };
        var userInfo = {
            userName : 'Asdrubal'
        };
        res.render('./Empresas/agregarEmpresa',{
            pageInfo : pageInfo,
            userInfo: userInfo
        });
    });

    router.post('/Empresas/agregar', function (req, res){
        console.log();
        
        var pageInfo = {
            pageName: 'Colacionator',
            pageTitle: 'Agregar Empresa'
        };
        var userInfo = {
            userName : 'Asdrubal'
        };
        return res.render('./Empresas/agregarEmpresa',{
            pageInfo : pageInfo,
            userInfo: userInfo
        });
    });





module.exports = router;