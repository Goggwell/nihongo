import Link from "next/link";
import clsx from "clsx";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={clsx(styles.Footer__section, styles.logo)}>
          <Link href="/">
            <li className={styles.Footer__logo}>
              <span>
                NIHON<b>GO!</b>
              </span>
            </li>
          </Link>
        </div>
        <div className={clsx(styles.Footer__section, styles.list)}>
          <ul className={styles.Footer__list}>
            <li className={styles["Footer__list--item"]}>
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
            <li className={styles["Footer__list--item"]}>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
