import styles from "./Footer.module.css";

function Footer() {
  const equipo = [
    {
      id: 1,
      nombre: "Pablo Colazo",
      rol: "Desarrollador Frontend",
      descripcion: "Responsable de la estructura React, rutas y carrito de compras.",
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      rol: "Diseñadora UX/UI",
      descripcion: "Encargada de la experiencia visual y diseño de componentes.",
    },
    {
      id: 3,
      nombre: "Juan Pérez",
      rol: "Product Owner",
      descripcion: "Responsable de definir los contenidos y objetivos del sitio.",
    },
  ];

  return (
    <footer className={styles.footer}>
      <section className={styles.empresa}>
        <h2>Talento Lab</h2>
        <p>
          Plataforma educativa orientada a formar desarrolladores del futuro,
          ofreciendo cursos prácticos de tecnología, programación y desarrollo web.
        </p>
      </section>

      <section className={styles.equipo}>
        <h3>Equipo del proyecto</h3>

        <div className={styles.tarjetas}>
          {equipo.map((persona) => (
            <article className={styles.card} key={persona.id}>
              <h4>{persona.nombre}</h4>
              <p className={styles.rol}>{persona.rol}</p>
              <p>{persona.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <p className={styles.copy}>
        © 2026 Talento Lab. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;