import styles from "./Header.module.css";
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="" />
      </div>
    </header>
  );
}
