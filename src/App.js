import './App.css';
import ListadoNoticias from './componentes/ListadoNoticias';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Noticia from './componentes/Noticia';
import BarraNavegacion from './componentes/BarraNavegacion';

function App() {
  return (
    <>
    <BarraNavegacion mb="50"/>
    <BrowserRouter mt="4">
      <Routes>
        <Route path="/" element={<ListadoNoticias />} />
        <Route path="/noticias/:id" element={<Noticia />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
