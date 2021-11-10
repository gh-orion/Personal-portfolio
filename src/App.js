import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
