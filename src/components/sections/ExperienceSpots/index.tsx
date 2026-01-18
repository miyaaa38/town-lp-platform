"use client";

import { useState } from "react";
import type { Spot } from "../../../lib/data/towns";
import { Dialog } from "../../ui/Dialog";
import { SpotGrid } from "../../ui/SpotCarousel/SpotGrid";
import styles from "./ExperienceSpots.module.scss";

type ExperienceSpotsProps = {
  spots: Spot[];
};

export function ExperienceSpots({ spots }: ExperienceSpotsProps) {
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const activeSpot = spots.find((spot) => spot.id === activeSpotId) ?? null;

  return (
    <section className={`section ${styles.carousel}`}>
      <div className="container">
        <h2 className="title">体験するスポット</h2>
        <SpotGrid
          spots={spots}
          onDetail={setActiveSpotId}
          className={styles.track}
          staticClassName={styles.staticTrack}
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
