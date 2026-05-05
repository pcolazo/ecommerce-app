import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import styles from "./ItemListContainer.module.css";

export function ItemListContainer({ mensaje }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }

        return respuesta.json();
      })
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <h2>Cargando cursos...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <section>
      <h2 className={styles.subtitulo}>{mensaje}</h2>

      <div className={styles.productos}>
        <ItemList productos={productos} />
      </div>
    </section>
  );
}