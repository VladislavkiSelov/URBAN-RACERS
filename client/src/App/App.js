import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../section/Header';
import MainPage from '../pages/MainPage';
import CategoriesPage from '../pages/CategoriesPage';
import CategoryPage from '../pages/CategoryPage';
import Footer from '../section/Footer';
import ProductCardPage from '../pages/ProductCardPage';
import ErrorPage from '../pages/ErrorPage';
import BasketPage from '../pages/BasketPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/category" element={<CategoriesPage />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
          <Route path="/category/:categoryId" element={<CategoryPage />}></Route>
          <Route path="/category/:categoryId/product/:productId" element={<ProductCardPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

