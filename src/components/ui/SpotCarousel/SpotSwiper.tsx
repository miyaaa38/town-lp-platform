"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import type { Spot } from "../../../lib/data/towns";
import SpotCard from "./SpotCard";

type SpotSwiperProps = {
  spots: Spot[];
  onDetail: (id: string) => void;
  className: string;
  slideClassName: string;
  cardClassName?: string;
};

export default function SpotSwiper({
  spots,
  onDetail,
  className,
  slideClassName,
  cardClassName,
}: SpotSwiperProps) {
  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={32}
      centeredSlides={false}
      loop={spots.length > 1}
      pagination={{ clickable: true }}
      observer
      observeParents
      loopPreventsSliding
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 3.5 },
        1024: { slidesPerView: 4.5 },
      }}
    >
      {spots.map((spot) => (
        <SwiperSlide key={spot.id} className={slideClassName}>
          <SpotCard spot={spot} onDetail={onDetail} className={cardClassName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
