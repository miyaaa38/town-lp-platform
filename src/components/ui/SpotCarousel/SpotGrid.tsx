"use client";

import type { Spot } from "../../../lib/data/towns";
import SpotCard from "./SpotCard";

type SpotGridProps = {
  spots: Spot[];
  onDetail: (id: string) => void;
  className: string;
  staticClassName: string;
  cardClassName?: string;
};

export default function SpotGrid({
  spots,
  onDetail,
  className,
  staticClassName,
  cardClassName,
}: SpotGridProps) {
  return (
    <div className={`${className} ${staticClassName}`}>
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          spot={spot}
          onDetail={onDetail}
          className={cardClassName}
        />
      ))}
    </div>
  );
}
