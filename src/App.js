import logo from './logo.svg';
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Single from './pages/Single';
import Wishlist from './pages/Wishlist';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div style={{marginBottom:"60px"}}><Navbar/></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

