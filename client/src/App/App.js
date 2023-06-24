import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/App.scss';
import MainPage from '../pages/MainPage';
import Header from '../section/Header';
import Footer from '../section/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
