import React from 'react'

export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>

      <form>
        <h3>LOGIN</h3>
        <label>Username: </label>
        <input />

        <label>Password: </label>
        <input />

        <input type="submit" value="login" />
      </form>
    </div>
  )
}
