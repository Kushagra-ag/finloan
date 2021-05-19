import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import System from './pages/system';
import ManageCodes from './pages/manageCodes';
import EditCode from './pages/editCode';
import AddCodeValue from './pages/addCodeValue';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*<Route path="/addcodevalue">
            <AddCodeValue />
          </Route>
          <Route path="/editcode">
            <EditCode />
          </Route>*/}
          <Route path="/managecodes">
            <ManageCodes />
          </Route>
          <Route path="/system">
            <System />
          </Route>
          <Route path="/">
            <Redirect to="/system" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
