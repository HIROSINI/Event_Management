import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import About from './About';
import Privacy from './Privacy';
import Profile from './Profile';
import Events from './Events';
import Attendee from './Attendee';
import Organizer from './Organizer';

function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Privacy" element={<Privacy/>}></Route>
        <Route path="/Events" element={<Events/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Attendee" element={<Attendee/>}></Route>
        <Route path="/Organizer" element={<Organizer/>}></Route>
    </Routes>
  </Router>
    </div>
    </>
  );
}

export default App;
