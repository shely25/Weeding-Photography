import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import About from './Components/About/About';
import Register from './Components/LogIn/Register';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import CheckOut from './Components/CheckOut/CheckOut';

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
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/CheckOut' element={<CheckOut></CheckOut>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
