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
import CreateReport from './pages/createReport';
import ReportDetails from './pages/reportDetails';
import EditReport from './pages/editReport';
import ManageRoles from './pages/manageRoles';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/manageroles">
                        <ManageRoles />
                    </Route>
                    <Route path="/editreport">
                        <EditReport />
                    </Route>
                    <Route path="/reportdetails">
                        <ReportDetails />
                    </Route>
                    <Route path="/createreport">
                        <CreateReport />
                    </Route>
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
