import './App.css';
import Header from './componentes/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<p>error 404</p>} />
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
