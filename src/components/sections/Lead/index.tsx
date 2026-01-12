import styles from "./Lead.module.scss";

type LeadProps = {
  title: string;
  body: string;
};

export default function Lead({ title, body }: LeadProps) {
  return (
    <section className={`section ${styles.lead}`}>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}
