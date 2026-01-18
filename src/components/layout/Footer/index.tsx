import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>©2025 matinabi demo</span>
        <nav className={styles.links}>
          <a href="/">ホーム</a>
          <a href="/me/favorites">お気に入り</a>
        </nav>
      </div>
    </footer>
  );
}
