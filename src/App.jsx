import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleSignIn from './Components/GoogleSignIn/GoogleSignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Firebase + React</h1>
      <GoogleSignIn></GoogleSignIn>
    </>
  )
}

export default App
