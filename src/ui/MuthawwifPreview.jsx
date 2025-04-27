import { useMediaQuery } from "react-responsive";
import LazyImage from "../helper/LazyImage";
import NavLinkSolo from "./NavLinkSolo";

function MuthawwifPreview({ data = [], linkTitle = "" }) {
  //grid grid-cols-[repeat(auto-fit,minmax(14rem,min-content))] justify-items-center
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(10rem,max-content))] ";
  return (
    <>
      <div
        className={` w-[95dvw] lg:w-[65dvw] mx-auto grid ${gridColsSetting} justify-items-center  items-center justify-between gap-4 md:gap-6`}
      >
        {data?.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className=" rounded-md bGLinearGradient first:rounded-tl-full last:rounded-br-full md:last:rounded-br-full md:last:rounded-tr-none lg:last:rounded-tr-full lg:last:rounded-br-none"
          >
            <LazyImage
              className="  w-full h-full -mb-1 md:-mb-2"
              src={item.image}
              alt={item.name}
            />
            <div className=" bGLinearGradient flex flex-col justify-center items-center -space-y-2">
              <p className=" font-semibold text-lg mb-1">{item.name}</p>
              <span className=" text-sm">{item.school}</span>
              <span className=" text-sm">{item.city}</span>
            </div>
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

export default MuthawwifPreview;
