import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import System from './pages/system';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*<Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>*/}
          <Route path="/">
            <System />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
