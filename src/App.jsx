
import './App.css'
import GithubSignIn from './Components/GithubSignIn/GithubSignIn'
import GoogleSignIn from './Components/GoogleSignIn/GoogleSignIn'

function App() {


  return (
    <>
      
      <h1>Firebase + React</h1>
      <GoogleSignIn></GoogleSignIn>
      <GithubSignIn></GithubSignIn>
    </>
  )
}

export default App
