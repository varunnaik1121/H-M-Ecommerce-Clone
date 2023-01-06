import './App.css';
import Sidebar from './comps/Sidebar';
import Navbar from './comps/Navbar';
import Categories from './comps/Categories';
import Hero from './comps/Hero';
import Home from './comps/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/Categories';
import SubCategory from './comps/SubCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Hero />}></Route>
            <Route
              path=":categories"
              element={<CategoriesPage></CategoriesPage>}
            ></Route>
            <Route
              path=":categories/:subcat"
              element={<SubCategory></SubCategory>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
