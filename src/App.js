import './App.css'
import Leaderboard from './components/leaderboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './components/Landing'
function App() {
  return (
    <div className='App'>
      <Landing />
      <Leaderboard />
    </div>
  )
}

export default App
