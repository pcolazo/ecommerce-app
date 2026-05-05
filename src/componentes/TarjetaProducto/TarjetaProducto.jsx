import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ id, nombre, descripcion, precio, stock, imagen }) {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <article className={styles.card}>
      <span className={styles.favorito} onClick={toggleFavorito}>
        {favorito ? "⭐" : "☆"}
      </span>

      <div className={styles.icono}>
        <img src={imagen} alt={nombre} width="64" height="64" />
      </div>

      <h3 className={styles.titulo}>{nombre}</h3>

      {descripcion && (
        <p className={styles.descripcion}>{descripcion}</p>
      )}

      <div className={styles.precio}>${precio}</div>

      <p>Stock disponible: {stock}</p>

      <Link className={styles.detalle} to={`/producto/${id}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default TarjetaProducto;