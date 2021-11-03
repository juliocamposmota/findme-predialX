const express = require('express');
const router = express.Router();
const Client = require('../controllers/Client');

router.get('/', Client.getAll);
router.get('/:id', Client.getById);

router.post('/', Client.createClient);
router.put('/:id', Client.updateClient);
router.delete('/:id', Client.deleteClient);

module.exports = router;
