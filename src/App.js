import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Leaderboard from './components/leaderboard/leaderboard/leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/" component={Login}/>
        <Route exact path= "/leaderboard" component={Leaderboard}  />
      </BrowserRouter>
    </div>
  );
}

export default App;
