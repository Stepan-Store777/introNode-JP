const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const PedidosController =  require('../controllers/pedidos');

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.delete('/pedidos', PedidosController.listarPedidos); 
router.delete('/pedidos', PedidosController.cadastrarPedidos); 
router.delete('/pedidos', PedidosController.editarPedidos); 
router.delete('/pedidos', PedidosController.apagarPedidos); 


module.exports = router;