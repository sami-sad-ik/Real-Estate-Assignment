import { useEffect, useState } from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "/src/index.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Banner = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/Estates.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="my-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
        }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        autoplay={{ delay: 3000 }}
        className="w-full lg:max-w-6xl mx-auto">
        {properties.map((prop) => (
          <SwiperSlide key={prop.id} className="flex justify-center">
            <div className="relative lg:w-[600px] lg:h-[400px] md:w-[450px] md:h-[300px]  rounded-lg overflow-hidden shadow-lg">
              <img
                className=" w-full h-full object-cover"
                src={prop.image}
                alt={prop.estate_title}
              />
              <div className="absolute bottom-1/4 left-1/5 bg-[#0000002d] text-white px-4 py-2 rounded-lg">
                <h2 className="text-3xl font-bold">{prop.estate_title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
