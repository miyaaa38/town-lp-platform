import Link from "next/link";
import styles from "./CTA.module.scss";

type CTAProps = {
  title: string;
  description: string;
};

export function CTA({ title, description }: CTAProps) {
  return (
    <section className={`section ${styles.cta}`}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h2 className={`title ${styles.title}`}>{title}</h2>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.actions}>
          <Link href="/login" className={styles.primaryLink}>
            会員登録する
          </Link>
          <Link
            href="/me/favorites"
            className={`${styles.primaryLink} ${styles["primaryLink--second"]}`}
          >
            お気に入りを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
