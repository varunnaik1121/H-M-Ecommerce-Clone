import './App.css';
import Sidebar from './comps/Sidebar';
import Navbar from './comps/Navbar';
import Categories from './comps/Categories';
import Hero from './comps/Hero';
import Home from './comps/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clothes from './comps/clothes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Hero />}></Route>
            <Route path="clothes" element={<Clothes />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
