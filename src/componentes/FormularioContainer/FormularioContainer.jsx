import { useState } from "react";
import { FormularioProductos } from "../FormularioProductos/FormularioProductos";

export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevoProducto = {
      ...datosForm,
      precio: Number(datosForm.precio),
      stock: Number(datosForm.stock),
      imagenFile,
    };

    console.log("Nuevo producto cargado:", nuevoProducto);
    alert("Producto cargado correctamente. Revisá la consola.");

    setDatosForm({
      nombre: "",
      precio: "",
      stock: "",
    });

    setImagenFile(null);
  };

  return (
    <FormularioProductos
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarCambioImagen={manejarCambioImagen}
      manejarEnvio={manejarEnvio}
    />
  );
}