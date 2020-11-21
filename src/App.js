import './App.css';
import Store from './Components/State/Store'
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import RequestLogin from './Components/Login/RequestLogin';


function App() {
  return (
    <Store>
      <Router>
        <div className="App">
          <Route path="/login" component={RequestLogin} />
          <Login/>
        </div>
      </Router>
    </Store>
  );
}

export default App;
