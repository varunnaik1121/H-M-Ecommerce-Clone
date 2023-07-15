import './App.css';
import Sidebar from './comps/Sidebar';
import Navbar from './comps/Navbar';
import Categories from './comps/Categories';
import Hero from './comps/Hero';
import Home from './comps/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/Categories';
import SubCategory from './comps/MainPages/SubCategory';
import Product from './comps/MainPages/Product';
import ClothType from './comps/MainPages/ClothType';
import ProductPage from './comps/MainPages/ProductPage';
import Cart from './comps/MainPages/Cart';
import { Search } from '@mui/icons-material';
import SearchItems from './comps/MainPages/SearchItems';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Hero />}></Route>
            <Route
              path="/:categories"
              element={<CategoriesPage></CategoriesPage>}
            ></Route>
            <Route
              path="/:categories/:subCategory"
              element={<SubCategory></SubCategory>}
            ></Route>
            <Route
              path="/:categories/:subCategory/:clothType"
              element={<ClothType></ClothType>}
            ></Route>
            <Route path="cart" element={<Cart />} />
            <Route path="search-results" element={<SearchItems />}></Route>
          </Route>

          <Route path="product" element={<Home />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
