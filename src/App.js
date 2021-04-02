import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { createContext,  useState } from 'react';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import NotMatched from './components/NotMatched/NotMatched';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/orders/:id">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute  path="/orders">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute  path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/checkout/:key">
          <Checkout />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
   <NotMatched></NotMatched>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
   
  )
}

export default App;
