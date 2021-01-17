import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import setAuthToken from '../../utils/utils'
import './App.css'

import { Layout } from 'antd'

import Navigation from '../../components/nav/Navigation'
import FooterNav from '../../components/nav/FooterNav'
import Breadcrumbs from '../../components/nav/Breadcrumbs'
import Routes from '../routes/Routes'

const { Header, Content } = Layout

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Navigation />
        <Layout className="site-layout">
          <Header
            style={{ padding: 0, height: '67px', backgroundColor: 'white' }}
          />
          <Breadcrumbs />
          <Content style={{ margin: '0 16px', background: 'white' }}>
            <Routes />
          </Content>
          <FooterNav />
        </Layout>
      </Router>
    </Layout>
  )
}

export default App
