import './App.css';
import ShopLogo from './components/ShopLogo';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Allbook from './Pages/Allbook';
import Login from './Pages/Login';

function App() {
  return (
    <div className="app">
      <ShopLogo />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/books' element={<Allbook />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
