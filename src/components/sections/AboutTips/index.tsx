import styles from "./AboutTips.module.scss";

type AboutTipsProps = {
  title: string;
  tips: string[];
};

export function AboutTips({ title, tips }: AboutTipsProps) {
  return (
    <section className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="title">{title}</h2>
        <ul className={styles.list}>
          {tips.map((tip, index) => (
            <li key={`${tip}-${index}`} className={styles.item}>
              <p className={styles.number}>
                point<em>{`0${index + 1}`}</em>
              </p>
              <p className={styles.tip}>{tip}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
