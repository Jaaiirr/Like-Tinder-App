import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Views/Login';
import Register from './components/Views/Register';
import NotFound404 from './components/Views/NotFound404';
import Card from './components/Card';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
        <Route exact path="/register">
            <Register/>
        </Route>
        <Route exact path="/card">
            <Card/>
        </Route>
        <Route path="*">
            <NotFound404/>
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
