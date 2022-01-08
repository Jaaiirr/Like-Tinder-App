import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Views/Login';
import Register from './components/Views/Register';
import NotFound404 from './components/Views/NotFound404';
import Card from './components/Views/Card';
import Logout from './components/Views/Logout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Chats from './components/Views/Chats';
import Profile from './components/Views/Profile';
// import UserContainer from "./UserContainer";



const App = () => {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
              <Login/>
          </Route>
          <Route exact path="/logout">
              <Logout/>
          </Route>
          <Route exact path="/chats">
              <Chats/>
          </Route>
          <Route exact path="/profile">
              <Profile/>
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
      </Provider>
    </>
  );
}

export default App;
