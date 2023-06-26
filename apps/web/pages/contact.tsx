import { useState, useEffect } from "react";

import Link from "next/link";

import { getContact } from "@/lib/api";
import { IContact } from "@/lib/types";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Snackbar from "@/components/Snackbar";
import Map from "@/components/Map";

import MapIcon from "@/icons/MapIcon";
import YoutubeIcon from "@/icons/YoutubeIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import FacebookIcon from "@/icons/FacebookIcon";

import clsx from "clsx";
import styles from "@/styles/Contact.module.scss";

export default function Contact({
  map,
  address,
  phonenumber,
  email,
  hours,
  socials,
}: IContact) {
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log(map);
  }, []);

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
                <Link href={address.addressurl} className={styles.map}>
                  <Map url={map.picture} hash={map.hash} />
                </Link>
                <figcaption className={styles.address}>
                  <Link href={address.addressurl}>
                    <MapIcon />
                  </Link>
                  <span>{address.addressname}</span>
                </figcaption>
              </figure>
              <ul className={styles.Contact__info}>
                <li>
                  <b>Phone Number: </b>
                  {phonenumber}
                </li>
                <li>
                  <b>Email Address: </b>
                  {email}
                </li>
                <li>
                  <b>Business Hours: </b>
                  {hours}
                </li>
              </ul>
              <ul className={styles.Contact__socials}>
                <li>
                  <Link href={socials.youtube}>
                    <YoutubeIcon />
                  </Link>
                </li>
                <li>
                  <Link href={socials.instagram}>
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link href={socials.facebook}>
                    <FacebookIcon />
                  </Link>
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

export async function getStaticProps() {
  const { map, address, phonenumber, email, hours, socials } =
    await getContact();
  return {
    props: {
      map,
      address,
      phonenumber,
      email,
      hours,
      socials,
    },
    revalidate: 60,
  };
}
