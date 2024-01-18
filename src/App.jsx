import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx'
import OrganizationsHome from './components/home/OrganizationsHome.jsx'
import LocalHome from './components/local/LocalHome.jsx'
import LoggedInHome from './components/logged-in/LoggedInHome.jsx'
import Login from './components/logowanie/Login.jsx'
import Register from './components/rejestracja/Register.jsx';
import Logout from './components/Logout/Logout.jsx'


function App() {


    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/organizations" element={<OrganizationsHome/>}/>
                <Route path="/local" element={<LocalHome/>}/>
                <Route path="/LoggedInHome" element={<LoggedInHome/>}/>
                {/*<Route path="/" element={<FormStep1/>}/>*/}
                {/*<Route path="/" element={<FormStep2/>}/>*/}
                {/*<Route path="/oddaj-rzeczy/krok-2/select" element={<FormStep2OpenedSelect />} />*/}
                {/*<Route path="/" element={<FormStep3/>}/>*/}
                {/*<Route path="/oddaj-rzeczy/krok-3/select" element={<FormStep3OpenedSelect />} />*/}
                {/*<Route path="/oddaj-rzeczy/krok-4" element={<FormStep4 />} />*/}
                {/*<Route path="/oddaj-rzeczy/summary" element={<FormSummary />} />*/}
                {/*<Route path="/oddaj-rzeczy/thank-you" element={<FormThankYou />} />*/}
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </Router>


    );
}

export default App
