const express = require('express');
const router = express.Router();
const Employer = require('../controllers/Employer');

router.get('/', Employer.getAll);
router.get('/:id', Employer.getById);
router.post('/', Employer.createEmployer);
router.put('/:id', Employer.updateEmployer);
router.delete('/:id', Employer.deleteEmployer);

module.exports = router;
