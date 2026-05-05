import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.contenido}>
        <h2 className={styles.typewriter}>
          Aprendé desarrollo web con Talento Lab
        </h2>

        <p className={styles.descripcion}>
          Cursos prácticos de HTML, CSS, JavaScript y React para comenzar
          a construir proyectos reales.
        </p>

        <Link className={styles.boton} to="/productos">
          Ver cursos
        </Link>
      </div>
    </section>
  );
}

export default Home;