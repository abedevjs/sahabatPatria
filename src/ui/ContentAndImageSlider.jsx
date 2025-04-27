import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import LazyImage from "../helper/LazyImage";
import StarIconMaker from "../helper/StarIconMaker";
import FramerReveal from "./FramerReveal";

function ContentAndImageSlider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(data?.imageArr.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function nextSlide() {
    if (currentSlide === data?.imageArr.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    // WRAPPER
    <FramerReveal>
      <div className=" max-w-[20rem] h-[25rem] flex flex-col    rounded-tl-md rounded-tr-md rounded-bl-sm rounded-br-sm group">
        {/* Image Container */}
        <div className="flex-1 w-[20rem] h-[20rem] relative">
          {data?.imageArr.map((image, index) => (
            <LazyImage
              key={index}
              src={image}
              className={`w-full h-full ${
                currentSlide == index ? "block" : "hidden"
              } md:brightness-50 group-hover:brightness-100 object-cover object-center rounded-tl-md rounded-tr-md duration-300`}
              alt=""
            />
          ))}
          {/* Arrows */}
          {data?.imageArr?.length > 1 && (
            <div className="h-full w-full absolute top-0 flex items-center justify-between ">
              <Icon
                onClick={prevSlide}
                icon="majesticons:chevron-left-circle"
                className=" text-gray-300 hover:text-gray-100 duration-300  w-8 h-8 cursor-pointer"
              />
              <Icon
                onClick={nextSlide}
                icon="majesticons:chevron-right-circle"
                className=" text-gray-300 hover:text-gray-100 duration-300  w-8 h-8 cursor-pointer"
              />
            </div>
          )}
          {/* DOTS */}
          {data?.imageArr?.length > 1 && (
            <div className=" absolute bottom-0 left-1/3 translate-x-[50%]  flex justify-center gap-2 ">
              {data?.imageArr.map((s, i) => {
                return (
                  <div
                    onClick={() => {
                      setCurrentSlide(i);
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-3 h-3 cursor-pointer opacity-60 hover:opacity-80 duration-300  ${
                      i == currentSlide ? "bg-gray-800" : "bg-gray-400"
                    }`}
                  ></div>
                );
              })}
            </div>
          )}
        </div>

        {/* Text Container */}
        <div className=" h-20 px-2 flex flex-col justify-around gap-2 bg-white">
          {/* Name */}
          <div className=" flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {data?.name}
            </Typography>
            <div>{<StarIconMaker star={data?.star} size={4} />}</div>
          </div>
          {/* Location/Transportation and website */}
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-x-2">
              <Icon
                icon={`${data?.iconFacility}`}
                className=" w-4 h-4 text-primary"
              />
              <div className=" flex items-baseline gap-x-2">
                <Typography>{data?.location || data?.base}</Typography>
                <Icon icon={data?.iconCountry} className="w-4 h-4" />
              </div>
            </div>
            {/* Website */}
            <a
              href={data?.map}
              rel="noreferrer"
              target="_blank"
              className=" text-blue-500 hover:text-inherit duration-150"
            >
              {data?.map && `Cek lokasi hotel di peta`}
            </a>
          </div>
        </div>
      </div>
    </FramerReveal>
  );
}

export default ContentAndImageSlider;
