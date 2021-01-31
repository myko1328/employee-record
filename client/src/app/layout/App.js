import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import setAuthToken from '../../utils/utils'

import '../../assets/scss/theme.scss'
import './App.css'

import Navigation from '../../components/nav/Navigation'
import FooterNav from '../../components/nav/FooterNav'
import Breadcrumbs from '../../components/nav/Breadcrumbs'
import Routes from '../routes/Routes'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return <h1>APP</h1>
}

export default App
