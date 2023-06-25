import { getAllCourses } from "@/lib/api";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ICourses } from "@/lib/types";

import clsx from "clsx";
import styles from "@/styles/Courses.module.scss";

export default function Courses({ courses }: ICourses) {
  return (
    <div
      className={clsx(styles.Courses, inter.variable, basierSquare.variable)}
    >
      <Navbar changed={true} opaque={true} />
      <div className={styles.Courses__container}>
        <h1 className={styles.Courses__title}>Perkenalan Kursus</h1>
        <div className={styles.Courses__stack}>
          {courses?.length > 0 &&
            courses.map((course) => (
              <div className={styles["Courses__stack--item"]} key={course.rank}>
                <div className={styles.heading}>
                  <h2 className={styles.title}>{course.title}</h2>
                  <span className={styles.description}>
                    {course.description}
                  </span>
                </div>
                <ul className={styles.info}>
                  <li>
                    <i>+</i>
                    <span>{course.info.info1}</span>
                  </li>
                  <li>
                    <i>+</i>
                    <span>{course.info.info2}</span>
                  </li>
                  <li>
                    <i>+</i>
                    <span>{course.info.info3}</span>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();
  return {
    props: {
      courses,
    },
    revalidate: 60,
  };
}
