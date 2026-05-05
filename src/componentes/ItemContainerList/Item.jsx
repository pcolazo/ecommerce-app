import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../TarjetaProducto/TarjetaProducto.module.css";

export function Item({ id, nombre, descripcion, precio, stock, imagen }) {
  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  const agregarAlCarrito = () => {
    if (cantidad === 0) {
      alert("Agregá al menos 1 producto");
      return;
    }

    alert(`Agregaste ${cantidad} unidad/es de ${nombre}`);
  };

  return (
    <article className={styles.card}>
      <span onClick={toggleFavorito}>
        {favorito ? "⭐" : "☆"}
      </span>

      <div className={styles.icono}>
        <img src={imagen} alt={nombre} width="64" height="64" />
      </div>

      <h3 className={styles.titulo}>{nombre}</h3>

      <p className={styles.descripcion}>{descripcion}</p>

      <div className={styles.precio}>${precio}</div>

      <p>Stock disponible: {stock}</p>

      <Link className={styles.detalle} to={`/producto/${id}`}>
        Ver detalle
      </Link>

      <div>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button
        className={styles.boton}
        onClick={agregarAlCarrito}
        disabled={stock === 0}
      >
        🛒 Agregar al carrito
      </button>
    </article>
  );
}