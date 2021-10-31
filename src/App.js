import './App.css'
import Leaderboard from './components/leaderboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './components/Landing'
import Questions from './components/Questions'
import LoginPage from './components/LoginPage'
import CTFhero from './components/CTFhero'
import CTFQuestions from './components/CTFQuestions'
function App() {
  return (
    <div className='App'>
      {/* <Questions /> */}
      {/* <Landing /> */}
      {/* <Leaderboard /> */}
      {/* <LoginPage /> */}
      <CTFhero />
      <CTFQuestions />
    </div>
  )
}

export default App
