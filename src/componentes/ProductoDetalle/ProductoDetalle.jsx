import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductoDetalle.module.css";
import { useCart } from "../../context/CartContext";

function ProductoDetalle() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el producto");
        }

        return respuesta.json();
      })
      .then((productos) => {
        const productoEncontrado = productos.find(
          (prod) => prod.id === Number(id)
        );

        if (!productoEncontrado) {
          throw new Error("Producto no encontrado");
        }

        setProducto(productoEncontrado);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!producto) return;

    addToCart(producto, 1);
    alert(`Agregaste ${producto.nombre} al carrito`);
  };

  if (cargando) {
    return (
      <section className={styles.contenedor}>
        <h2>Cargando detalle del producto...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.contenedor}>
        <div className={styles.card}>
          <h2>Error: {error}</h2>
          <Link className={styles.link} to="/productos">
            Volver a productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contenedor}>
      <article className={styles.card}>
        <h2 className={styles.titulo}>{producto.nombre}</h2>

        <img
          className={styles.imagen}
          src={producto.imagen}
          alt={producto.nombre}
        />

        {producto.descripcion && (
          <p className={styles.descripcion}>{producto.descripcion}</p>
        )}

        <p className={styles.precio}>${producto.precio}</p>

        <p className={styles.stock}>
          Stock disponible: {producto.stock}
        </p>

        <button className={styles.boton} onClick={handleAddToCart}>
          🛒 Agregar al carrito
        </button>

        <Link className={styles.link} to="/productos">
          Volver a productos
        </Link>
      </article>
    </section>
  );
}

export default ProductoDetalle;