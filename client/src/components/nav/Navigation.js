import React, { useState, Fragment } from 'react'

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {
    if (collapsed) {
      setCollapsed(true)
    } else setCollapsed(false)
  }
  return <div>NAV</div>
}

export default Navigation
