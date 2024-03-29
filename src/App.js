import './index.css';
import Header from './componentes/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import Footer from './componentes/Footer/Footer';
import QuinenesSomos from './componentes/page/quienes-somos/QuienesSomos';
import QueHacemos from './componentes/page/que-hacemos/QueHacemos';
import Template from './componentes/page/que-hacemos/Template';
import Ecogranja from './componentes/page/ecogranja/Ecogranja';
import Voluntariado from './componentes/page/voluntariado/Voluntariado';
import Contactanos from './componentes/page/contactanos/Contactanos';
import './responsive.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes-somos' element={<QuinenesSomos />} />
          <Route path='/que-hacemos' element={<QueHacemos />} />
          <Route path='/que-hacemos/:titulo' element={<Template />} />
          <Route path='/ecogranja' element={<Ecogranja />} />
          <Route path='/voluntariado' element={<Voluntariado />} />
          <Route path='/contactanos' element={<Contactanos />} />
          <Route path="*" element={<p>error 404</p>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
