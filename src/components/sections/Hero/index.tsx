import Image, { type StaticImageData } from "next/image";
import styles from "./Hero.module.scss";

type HeroProps = {
  catchCopy: string;
  place: string;
  imageSrc: string | StaticImageData;
};

export function Hero({ catchCopy, place, imageSrc }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.catch}>{catchCopy}</p>
        <h1 className={styles.place}>{place}</h1>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`${place}の風景`}
          priority
          fill
          className={styles.image}
        />
      </div>
    </section>
  );
}
