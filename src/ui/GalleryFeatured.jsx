import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import LazyImage from "../helper/LazyImage";
import FramerReveal from "./FramerReveal";

function GalleryFeatured({ abe }) {
  const [active, setActive] = useState(0);

  return (
    <FramerReveal>
      <div className=" max-w-[90%] mx-auto grid gap-2 md:gap-4">
        <div className=" flex items-center gap-x-3 ">
          <Icon icon={abe?.icon} className=" w-8 h-8 md:w-12 md:h-12" />
          <Typography variant="h4">{abe?.name}</Typography>
        </div>
        <div className=" relative">
          <LazyImage
            className={`h-[20rem] w-full max-w-full rounded-md object-cover object-center md:h-[480px] `}
            // src={abe?.placesArray[active]?.image}
            imageSmall={abe?.placesArray[active]?.imageSM}
            imageLarge={abe?.placesArray[active]?.imageLG}
            alt=""
          />
          <div className="absolute bottom-0 w-[100%] lg:w-2/3 lg:left-1/2 lg:-translate-x-1/2 lg:rounded-t-md h-[30%] md:h-[20%] px-2 bg-black opacity-60">
            <p className=" text-center text-lg md:text-xl text-amber-300">
              {abe?.placesArray[active]?.placeName}
            </p>
            <span className=" text-xs line-clamp-6 md:line-clamp-none md:text-base text-white">
              {abe?.placesArray[active]?.description}
            </span>
          </div>
        </div>
        <div className="grid grid-flow-col gap-2 md:gap-4">
          {abe?.placesArray.map((item, i) => (
            <div key={i}>
              <LazyImage
                onClick={() => setActive(i)}
                // src={item.image}
                imageSmall={item.imageSM}
                imageLarge={item.imageLG}
                className={`h-20 w-full cursor-pointer rounded-md object-cover object-center ${
                  active == i ? "brightness-100" : "brightness-50"
                }`}
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </FramerReveal>
  );
}

export default GalleryFeatured;

// const data = [
//   {
//     imgelink:
//       "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     imgelink:
//       "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   },
//   {
//     imgelink:
//       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   },
//   {
//     imgelink:
//       "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
//   },
//   {
//     imgelink:
//       "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
//   },
// ];
