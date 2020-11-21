import './App.css';
import Store from './Components/State/Store'
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Link, Switch }  from 'react-router-dom';
import Kanban from './Pages/Kanban';


function App() {
  const cards = ['A faire', 'En développement', 'Fini'];
  if (!window.localStorage.getItem('cards')) {
    window.localStorage.setItem('cards', JSON.stringify(cards));
  }
  return (
    <Store>
      <Router>
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Kanban </Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Kanban} />
          </Switch>        
        </div>
      </Router>
    </Store>
  );
}

export default App;
