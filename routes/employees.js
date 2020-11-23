const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const { check, validationResult } = require('express-validator')

const Employees = require('../models/Employees')

// @route   GET api/employees
// @desc    GET all employee records
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employees.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.json(employees)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   POST api/employees
// @desc    Add new employee record
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'Firs Name is required').notEmpty(),
      check('lastName', 'Last Name is required').notEmpty(),
      check('phone', 'Enter a valid number').isNumeric(),
      check('salary', 'Enter a valid salary format').isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { firstName, lastName, email, phone, status, salary } = req.body

    try {
      const newEmployees = new Employees({
        firstName,
        lastName,
        email,
        phone,
        status,
        salary,
        user: req.user.id,
      })

      const employee = await newEmployees.save()

      res.json(employee)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route   PUT api/employees/:id
// @desc    Update employee
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { firstName, lastName, email, phone, status, salary } = req.body

  //Build a contact object
  const employeeFields = {}

  if (firstName) employeeFields.firstName = firstName
  if (lastName) employeeFields.firstName = lastName
  if (email) employeeFields.firstName = email
  if (phone) employeeFields.firstName = phone
  if (status) employeeFields.firstName = status
  if (salary) employeeFields.firstName = salary

  try {
    let employee = await Employees.findById(req.params.id)

    if (!employee) {
      return res.status(404).json({ msg: 'Contact not found' })
    }

    //Make sure user owns contact
    if (employee.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    employee = await Employees.findByIdAndUpdate(
      req.params.id,
      { $set: employeeFields },
      { new: true }
    )

    res.json(employee)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   DELETE api/employees/:id
// @desc    Delete employee
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let employee = await Employees.findById(req.params.id)

    if (!employee) {
      return res.status(404).json({ msg: 'Contact not found' })
    }

    //Make sure user owns contact
    if (employee.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    await Employees.findOneAndRemove(req.params.id)

    res.json({ msg: 'Contact Removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
