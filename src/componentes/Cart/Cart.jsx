import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, clearCart, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className={styles.contenedor}>
        <div className={styles.card}>
          <h2>El carrito está vacío</h2>
          <p>Agregá productos para continuar la compra.</p>

          <Link className={styles.link} to="/productos">
            Ver productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contenedor}>
      <h2>Carrito de compras</h2>

      <div className={styles.lista}>
        {cart.map((item) => (
          <article className={styles.item} key={item.id}>
            <img src={item.imagen} alt={item.nombre} />

            <div>
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.precio}</p>
              <p>Subtotal: ${item.precio * item.quantity}</p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </article>
        ))}
      </div>

      <h3>Total: ${getCartTotal()}</h3>

      <button className={styles.boton} onClick={clearCart}>
        Vaciar carrito
      </button>
    </section>
  );
}

export default Cart;