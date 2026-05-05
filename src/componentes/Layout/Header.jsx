import styles from './Header.module.css';
import Navbar from './Navbar';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Talento Lab</h1>

      <p className={styles.subtitle}>
        Formando desarrolladores del futuro
      </p>

      <Navbar />
    </header>
  );
}

export default Header;