import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Views/Login';
import Register from './components/Views/Register';
import NotFound404 from './components/Views/NotFound404';
import Form from './components/Views/Form';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/liked">
            {/* <Liked /> */}
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
        <Route exact path="/register">
            <Register/>
        </Route>
        <Route path="*">
            <NotFound404/>
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
