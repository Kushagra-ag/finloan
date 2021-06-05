import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.scss';
import System from './pages/system';
import ManageCodes from './pages/manageCodes';
import EditCode from './pages/editCode';
import AddCodeValue from './pages/addCodeValue';
import ManageReports from './pages/manageReports';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/managereports">
                        <ManageReports />
                    </Route>
                    <Route path="/addcodevalue">
                        <AddCodeValue />
                    </Route>
                    <Route path="/editcode">
                        <EditCode />
                    </Route>
                    }
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
