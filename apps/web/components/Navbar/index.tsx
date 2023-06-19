import Link from "next/link";

import Logo from "@/icons/Logo";

import clsx from "clsx";
import styles from "./Navbar.module.scss";

export interface INavbar {
  hidden?: Boolean;
  changed?: Boolean;
}

const Navbar = ({ hidden = false, changed }: INavbar) => {
  return (
    <nav
      className={clsx(
        styles.Navbar,
        hidden && styles["is-hidden"],
        changed && styles["is-changed"]
      )}
    >
      <div className={styles.Navbar__container}>
        <ul className={styles.Navbar__main}>
          <Link href="/">
            <li className={styles.Navbar__logo}>
              {/* <span>
                NIHON<b>GO!</b>
              </span> */}
              <Logo />
            </li>
          </Link>
          <ul className={styles.Navbar__items}>
            <Link href="/courses">
              <li className={styles.Navbar__item}>
                <p>Courses</p>
              </li>
            </Link>
            <Link href="/about">
              <li className={styles.Navbar__item}>
                <p>About</p>
              </li>
            </Link>
            <Link href="/blog">
              <li className={styles.Navbar__item}>
                <p>Blog</p>
              </li>
            </Link>
            <Link href="/contact">
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
