import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Entries from './components/Entries/Entries';
import UserEntries from './components/UserEntries/UserEntries';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path='/entries' element={<Entries></Entries>}/>
      <Route exact path='/myEntries' element={<UserEntries/>}/>

      <Route path='/' element={localStorage.getItem('usuario') ? <Projects/> : <Login/>}></Route>

      </Routes>

      </Router>
    </div>
  );
}

export default App;
