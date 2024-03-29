import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurante from './paginas/Administracao/Restaurante/AdministracaoRestaurante';
import FormularioRestaurante from './paginas/Administracao/Restaurante/FormularioRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurante" element={<AdministracaoRestaurante />} />
      <Route path="/admin/restaurante/novo" element={<FormularioRestaurante />} />
      <Route path="/admin/restaurante/:id" element={<FormularioRestaurante />} />
    </Routes>
  );
}

export default App;
