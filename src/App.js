import './App.css';
import { Header } from './componentes/Header/Header';
import { Cuadroizquierda } from './componentes/Cuadroizquierda/Cuadroizquierda';
import { Inicioagroecología } from './componentes/Inicioagroecología/Inicioagroecología';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Cuadroizquierda></Cuadroizquierda>
          <Inicioagroecología></Inicioagroecología>

          <Route path='/inicio' element={"hola"} />
          <Route path="*" element={<p>error 404</p>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
