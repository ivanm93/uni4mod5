var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//4. Borrar contenido y rellenar "/admin/login"
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    });
});

module.exports = router;