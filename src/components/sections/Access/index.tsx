import styles from "./Access.module.scss";

type AccessProps = {
  title: string;
  details: string[];
  mapSrc?: string;
};

export function Access({ title, details, mapSrc }: AccessProps) {
  return (
    <section className={`section ${styles.access}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrap}>
          <h2 className="title">{title}</h2>
          <ul className={styles.list}>
            {details.map((detail) => (
              <li className={styles.listInner} key={detail}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        {mapSrc ? (
          <div className={styles.map}>
            <iframe
              className={styles.mapInner}
              src={mapSrc}
              title={`${title}の地図`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : (
          <div className={styles.map} />
        )}
      </div>
    </section>
  );
}
