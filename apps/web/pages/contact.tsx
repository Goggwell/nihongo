import { useState } from "react";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Snackbar from "@/components/Snackbar";
import Map from "@/components/Map";

import YoutubeIcon from "@/icons/YoutubeIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import FacebookIcon from "@/icons/FacebookIcon";

import clsx from "clsx";
import styles from "@/styles/Contact.module.scss";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateForm = () => {
    return formName && formMessage;
  };

  const closeSnackbar = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORMSUBMIT_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }
    );

    const result = await response.json();

    if (result.success === "true") {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        closeSnackbar();
      }, 2000);
    } else {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        closeSnackbar();
      }, 2000);
    }
  }

  return (
    <div
      className={clsx(styles.Contact, inter.variable, basierSquare.variable)}
    >
      <Navbar changed={true} />
      <div className={styles.Contact__box}>
        <div className={styles.Contact__container}>
          <div className={styles.Contact__fields}>
            <div className={styles.Contact__form__container}>
              <div className={styles.Contact__heading}>
                <h1 className={styles.Contact__title}>Contact us</h1>
              </div>
              <form className={styles.Contact__form} onSubmit={handleSubmit}>
                <div className={styles["Contact__form--input__container"]}>
                  <label htmlFor="name">Nama</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles["Contact__form--input__container"]}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className={styles["Contact__form--input__container"]}>
                  <label htmlFor="message">Pertanyaan</label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setFormMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <Button
                  buttonType="submit"
                  className={styles.Contact__form__submit}
                  type="filled"
                  disabled={!validateForm()}
                  isLoading={isLoading}
                >
                  <span>Submit Form</span>
                </Button>
              </form>
            </div>
            <div className={styles.Contact__info__container}>
              <figure className={styles.Contact__info__map}>
                <div className={styles.map}>
                  <Map />
                </div>
                <figcaption className={styles.address}>
                  Jl. Taman Palem Lestari No.16, RT.5/RW.13, Cengkareng Bar.,
                  Kecamatan Cengkareng, Kota Jakarta Barat
                </figcaption>
              </figure>
              <ul className={styles.Contact__info}>
                <li>
                  <b>Phone Number: </b>+62-626-262626
                </li>
                <li>
                  <b>Email Address: </b>thisis@anemail.com
                </li>
                <li>
                  <b>Business Hours: </b>9am - 8pm
                </li>
              </ul>
              <ul className={styles.Contact__socials}>
                <li>
                  <YoutubeIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Snackbar isError={isError} isSuccess={isSuccess}>
        {isSuccess && "Pesan terkirim! Terima kasih telah menghubungi kami!"}
        {isError && "Error! Coba kirim lagi."}
      </Snackbar>
      <Footer />
    </div>
  );
}
