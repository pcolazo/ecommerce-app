function TarjetaReseña({ cliente, texto }) {
  return (
    <article>
      <div><strong>{cliente}</strong></div>
      <p>"{texto}"</p>
    </article>
  );
}

export default TarjetaReseña;