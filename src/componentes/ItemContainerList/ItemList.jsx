// src/componentes/ItemList/ItemList.jsx
import styles from "./ItemList.module.css";
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";

export function ItemList({ productos }) {
  return (
    <section className={styles.productosGrid}>
      {productos.map((prod, index) => (
        <TarjetaProducto key={index} {...prod} />
      ))}
    </section>
  );
}
