import styles from "./ModelCourse.module.scss";

type ModelCourseProps = {
  title: string;
  summary: string;
  stops: string[];
};

export default function ModelCourse({
  title,
  summary,
  stops,
}: ModelCourseProps) {
  return (
    <section className={`section ${styles.course}`}>
      <div className="container">
        <h2 className={`title ${styles.title}`}>{title}</h2>
        <p className={styles.summary}>{summary}</p>
        <ol className={styles.stops}>
          {stops.map((stop, index) => (
            <li className={styles.stopsItem} key={`${stop}-${index}`}>
              <span className={styles.stopsNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {stop}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
