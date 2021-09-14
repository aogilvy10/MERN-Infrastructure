import React from 'react'
import SignUpForm from '../components/SignUpForm'


const AuthPage = ({ setUser }) => {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
    </main>
  )
}

export default AuthPage