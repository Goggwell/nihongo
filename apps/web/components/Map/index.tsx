import Image from "next/image";

import styles from "./Map.module.scss";

interface IMap {
  url: string;
  hash: string;
}

const Map = ({ url, hash }: IMap) => {
  return (
    <picture className={styles.Map}>
      <Image
        src={url}
        alt="Map"
        fill={true}
        placeholder="blur"
        blurDataURL={hash}
      />
    </picture>
  );
};

export default Map;
