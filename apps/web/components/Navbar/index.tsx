import Link from "next/link";
import clsx from "clsx";
import styles from "./Navbar.module.scss";

export interface INavbar {
  hidden?: Boolean;
}

const Navbar = ({ hidden = false }: INavbar) => {
  return (
    <nav className={clsx(styles.Navbar, hidden && styles["is-hidden"])}>
      <div className={styles.Navbar__container}>
        <ul className={styles.Navbar__main}>
          <Link href="/">
            <li className={styles.Navbar__logo}>
              <span>
                NIHON<b>GO!</b>
              </span>
            </li>
          </Link>
          <ul className={styles.Navbar__items}>
            <Link href="/about">
              <li className={styles.Navbar__item}>
                <p>About</p>
              </li>
            </Link>
            <Link href="/404">
              <li className={styles.Navbar__item}>
                <p>Contact</p>
              </li>
            </Link>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
