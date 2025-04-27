import { Typography } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";
import NavLinkSolo from "./NavLinkSolo";
import lozad from "lozad";
import LazyImage from "../helper/LazyImage";

function PerlengkapanPreview({ data = [], linkTitle = "" }) {
  const isMobileAndTabletMode = useMediaQuery({ query: "(max-width:900px)" });
  const gridColsSetting = isMobileAndTabletMode
    ? "grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(10rem,16rem))]";

  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  //"mx-auto grid grid-rows-[repeat(1fr,minmax(20rem,20rem))] grid-cols-[repeat(auto-fit,minmax(6rem,7rem))] items-center justify-center gap-6"
  //border-4 border-t-primary border-b-secondary border-r-secondary border-l-primary border-opacity-20 hover:border-opacity-60
  //bg-gradient-to-b from-secondary to-primary
  return (
    <>
      <div
        className={`w-[95vw] md:w-full mx-auto grid ${gridColsSetting} items-center justify-center gap-6 md:gap-6`}
      >
        {data?.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="   p-2 flex flex-col items-center justify-between gap-4 bGLinearGradient duration-300 rounded-md group first:rounded-tl-full last:rounded-br-full md:last:rounded-br-none md:last:rounded-tr-full"
          >
            <LazyImage
              className="lozad w-full h-full block group-hover:scale-110 duration-300"
              src={item?.image}
              alt=""
            />
            <Typography variant="h6" color="gray">
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
      <div className=" w-full lg:w-[90%] flex items-center justify-end">
        <NavLinkSolo
          text={`Lihat semua ${
            linkTitle.split("").at(0).toUpperCase() +
            linkTitle.slice(1, linkTitle.length)
          }`}
          to={`/${linkTitle}`}
        />
      </div>
    </>
  );
}

export default PerlengkapanPreview;
