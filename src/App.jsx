import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx'



function App ()  {


  return (

      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
              {/*<Route path="/organizations" element={<OrganizationsHome />} />*/}
              {/*<Route path="/local" element={<LocalHome />} />*/}
              {/*<Route path="/logged-in" element={<LoggedInHome />} />*/}
              {/*<Route path="/oddaj-rzeczy" element={<FormStep1 />} />*/}
              {/*<Route path="/oddaj-rzeczy/krok-2" element={<FormStep2 />} />*/}
              {/*<Route path="/oddaj-rzeczy/krok-2/select" element={<FormStep2OpenedSelect />} />*/}
              {/*<Route path="/oddaj-rzeczy/krok-3" element={<FormStep3 />} />*/}
              {/*<Route path="/oddaj-rzeczy/krok-3/select" element={<FormStep3OpenedSelect />} />*/}
              {/*<Route path="/oddaj-rzeczy/krok-4" element={<FormStep4 />} />*/}
              {/*<Route path="/oddaj-rzeczy/summary" element={<FormSummary />} />*/}
              {/*<Route path="/oddaj-rzeczy/thank-you" element={<FormThankYou />} />*/}
              {/*<Route path="/logowanie" element={<Login />} />*/}
              {/*<Route path="/rejestracja" element={<Register />} />*/}
              {/*<Route path="/wylogowano" element={<Logout />} />*/}
          </Routes>
      </Router>


  );
}

export default App
