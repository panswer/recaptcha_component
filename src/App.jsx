import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from "./components/navbar";

import Login from "./components/login/index";
import Register from "./components/register/index";
function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
