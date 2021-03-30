import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orders">
          <Home />
        </Route>
        <Route path="/admin">
          <Home />
        </Route>
        <Route path="/checkout">
          <Home />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
   
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
