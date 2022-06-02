import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Home = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div>
      Home: {isAuth ? "You're successfully logged in" : "Please log in"}
    </div>
  )
}

export default Home