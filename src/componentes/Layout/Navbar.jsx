import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <Link to="/alta">Alta de producto</Link>
        </li>

        <li>
          <Link to="/carrito"><span>Carrito</span><CartWidget /></Link>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;