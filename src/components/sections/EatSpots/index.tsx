"use client";

import { useState } from "react";
import type { Spot } from "../../../lib/data/towns";
import { Dialog } from "../../ui/Dialog";
import { SpotSwiper } from "../../ui/SpotCarousel/SpotSwiper";
import styles from "./EatSpots.module.scss";

type EatSpotsProps = {
  spots: Spot[];
};

export function EatSpots({ spots }: EatSpotsProps) {
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const activeSpot = spots.find((spot) => spot.id === activeSpotId) ?? null;

  return (
    <section className={`section ${styles.carousel}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`title ${styles.title}`}>食べるスポット</h2>
        <SpotSwiper
          spots={spots}
          onDetail={setActiveSpotId}
          className={styles.track}
          slideClassName={styles.slide}
          cardClassName={styles.cardAlt}
        />
      </div>
      <Dialog
        open={Boolean(activeSpot)}
        title={activeSpot?.name ?? ""}
        description={activeSpot?.detail}
        onClose={() => setActiveSpotId(null)}
      />
    </section>
  );
}
