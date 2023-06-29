import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../section/Header';
import MainPage from '../pages/MainPage';
import CategoriesPage from '../pages/CategoriesPage';
import Category from '../pages/Category';
import Footer from '../section/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/category" element={<CategoriesPage />}></Route>
          <Route path="/category/:categoryId" element={<Category />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
