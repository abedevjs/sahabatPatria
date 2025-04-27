import { Typography } from "@material-tailwind/react";
import lozad from "lozad";
import LazyImage from "../helper/LazyImage";
import FramerReveal from "./FramerReveal";

function PerlengkapanDetail({ data }) {
  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  return (
    <div className=" w-full p-2 flex flex-col justify-center items-center gap-6 ">
      {data?.map((item, index) => (
        <div
          key={index}
          className=" w-full lg:w-4/5 flex flex-col lg:flex-row   rounded-md bg-gray-50 "
        >
          <div className=" lg:flex-1 bGLinearGradient rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md">
            <LazyImage
              src={item?.image}
              className="lozad w-[50%] mx-auto duration-300"
              alt=""
            />
          </div>
          <div className=" w-full lg:w-[40%] h-full p-4 lg:py-0 lg:px-4 flex flex-col self-center overflow-hidden">
            <Typography variant="h4" className=" text-center lg:mb-8">
              {item?.name}
            </Typography>
            <div className=" flex items-center space-x-2">
              <Typography className=" font-thin">Bahan:</Typography>
              <Typography>{item?.bahan}</Typography>
            </div>
            <div className=" flex items-center space-x-2">
              <Typography className=" font-thin">Ukuran:</Typography>
              <Typography>{item?.ukuran}</Typography>
            </div>
            <Typography className=" mt-2">{item?.description}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerlengkapanDetail;
