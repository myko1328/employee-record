const express = require('express')
const router = express.Router()

// @route   GET api/employees
// @desc    GET all employee records
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all employees')
})

// @route   POST api/employees
// @desc    Add new employee record
// @access  Private
router.post('/', (req, res) => {
  res.send('Add employee')
})

// @route   PUT api/employees/:id
// @desc    Update employee
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update employee')
})

// @route   DELETE api/employees/:id
// @desc    Delete employee
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete employee')
})

module.exports = router
