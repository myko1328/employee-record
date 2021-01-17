import React, { useState, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import { LogoContainer } from '../../styles/Employee'
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {
    if (collapsed) {
      setCollapsed(true)
    } else setCollapsed(false)
  }
  return (
    <Fragment>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <LogoContainer className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<TeamOutlined />}>
            Employee
          </Menu.Item>
        </Menu>
      </Sider>
    </Fragment>
  )
}

export default Navigation
