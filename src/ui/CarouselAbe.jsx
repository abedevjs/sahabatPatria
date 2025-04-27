import { Carousel } from "@material-tailwind/react";
import TestimonialCard from "./TestimonialCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

//CSS: Jonas Slider Bankist JS2
//Functionality: https://www.youtube.com/watch?v=GguJODC2cvI&list=PPSV
const CarouselAbe = ({ datas }) => {
  let [current, setCurrent] = useState(0);

  function prevSlide() {
    if (current === 0) {
      setCurrent(datas?.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }
  function nextSlide() {
    if (current === datas?.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  return (
    // Slider Jonas
    <div className=" h-[30rem] w-screen md:h-[25rem] md:w-[47rem] lg:w-2/3 relative mx-auto flex items-center md:rounded-md overflow-hidden">
      {/* CONTENT */}
      {datas.map((data, index) => (
        // Slide Jonas
        <div
          key={index}
          className="w-full flex items-center justify-center duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <TestimonialCard data={data} />
        </div>
      ))}
      {/* ARROWS */}
      <div className="h-full w-full absolute top-0 flex items-center justify-between ">
        <Icon
          onClick={prevSlide}
          icon="solar:round-arrow-left-bold"
          className=" text-gray-400 opacity-60 hover:opacity-80 duration-300 md:text-gray-800 w-10 h-10 cursor-pointer"
        />
        <Icon
          onClick={nextSlide}
          icon="solar:round-arrow-right-bold"
          className=" text-gray-400 opacity-60 hover:opacity-80 duration-300 md:text-gray-800 w-10 h-10 cursor-pointer"
        />
      </div>
      {/* DOTS */}
      <div className=" absolute bottom-0 left-[44%] md:left-1/2 flex justify-center gap-2 ">
        {datas?.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer opacity-60 hover:opacity-80 duration-300  ${
                i == current ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselAbe;

// {datas.map((user, index) => (
//   <TestimonialCard key={index} data={user} />
// ))}

// const userTesti = [
//   {
//     name: "Abe",
//     img: "/images/anindoTransparent.png",
//     status: "Jamaah Bln Januari",
//     text: "Keren banget",
//     star: 5,
//   },
//   {
//     name: "Abe",
//     img: "/images/anindoTransparent.png",
//     status: "Jamaah Bln Januari",
//     text: "Keren banget",
//     star: 4,
//   },
// ];
