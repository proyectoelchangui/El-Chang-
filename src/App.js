import './App.css';
import Header from './componentes/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        
        <Routes>
          <Route path='/inicio' element={<Home />} />
          <Route path="*" element={<p>error 404</p>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
