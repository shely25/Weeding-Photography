import './App.css';
import Header from './Components/Header/Header';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import LogIn from './Components/LogIn/LogIn';
import About from './Components/About/About';
import Register from './Components/LogIn/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </div>

  );
}

export default App;
