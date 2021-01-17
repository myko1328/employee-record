import React from 'react'
import { Breadcrumb } from 'antd'

const Breadcrumbs = () => {
  return (
    <div style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs
