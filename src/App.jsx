import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/ItemContainerList/ItemListContainer';
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer';
import ProductoDetalle from './componentes/ProductoDetalle/ProductoDetalle';
import Cart from "./componentes/Cart/Cart";
import Home from "./componentes/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/productos"
          element={<ItemListContainer mensaje="Nuestros cursos" />}
        />

        <Route
          path="/alta"
          element={<FormularioContainer />}
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

        <Route
          path="/carrito"
          element={<Cart />}
        />
      </Route>
    </Routes>
  );
}

export default App;