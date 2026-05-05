import styles from "./FormularioProductos.module.css";

export function FormularioProductos({
  datosForm,
  manejarCambio,
  manejarCambioImagen,
  manejarEnvio,
}) {
  return (
    <form className={styles.form} onSubmit={manejarEnvio}>
      <h3 className={styles.titulo}>Agregar Nuevo Producto</h3>

      <div className={styles.campo}>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej: Teclado Mecánico"
          value={datosForm.nombre}
          onChange={manejarCambio}
          required
        />
      </div>

      <div className={styles.campo}>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          placeholder="Ej: 95"
          value={datosForm.precio}
          onChange={manejarCambio}
          required
        />
      </div>

      <div className={styles.campo}>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          placeholder="Ej: 5"
          value={datosForm.stock}
          onChange={manejarCambio}
          required
        />
      </div>

      <div className={styles.campo}>
        <label>Imagen:</label>
        <input
          type="file"
          accept="image/*"
          onChange={manejarCambioImagen}
        />
      </div>

      <button className={styles.boton} type="submit">
        Guardar Producto
      </button>
    </form>
  );
}