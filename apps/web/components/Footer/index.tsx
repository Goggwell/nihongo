import Link from "next/link";
import clsx from "clsx";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__section}>
        <div className={styles.Footer__logo}>
          <span>
            Nihon<b>GO!</b>
          </span>
        </div>
        <ul className={styles.Footer__links}>
          <li className={styles.Footer__link}>
            <Link href="/courses">
              <span>Courses</span>
            </Link>
          </li>
          <li className={styles.Footer__link}>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li className={styles.Footer__link}>
            <Link href="/blog">
              <span>Blog</span>
            </Link>
          </li>
          <li className={styles.Footer__link}>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__separator} />
      <div className={clsx(styles.Footer__section, styles.legal)}>
        <span className={styles.Footer__copyright}>&#169; 2023 NihonGO!</span>
      </div>
    </footer>
  );
};

export default Footer;
