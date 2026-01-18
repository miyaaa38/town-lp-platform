"use client";

import type { Spot } from "../../../lib/data/towns";
import styles from "./SpotCard.module.scss";

type SpotCardProps = {
  spot: Spot;
  onDetail: (id: string) => void;
  className?: string;
};

export function SpotCard({ spot, onDetail, className }: SpotCardProps) {
  return (
    <article
      className={[styles.card, className].filter(Boolean).join(" ")}
      role="button"
      tabIndex={0}
      onClick={() => onDetail(spot.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onDetail(spot.id);
        }
      }}
    >
      <div
        className={styles.thumb}
        style={{
          backgroundImage: `url(${
            typeof spot.image === "string" ? spot.image : spot.image.src
          })`,
        }}
      />
      <div className={styles.body}>
        <h3>{spot.name}</h3>
        <p>{spot.summary}</p>
      </div>
      <span className={styles.detail}>
        詳細を見る
        <span className={styles.detailArrow} aria-hidden="true" />
      </span>
    </article>
  );
}
