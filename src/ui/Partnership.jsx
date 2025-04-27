import { useMediaQuery } from "react-responsive";
import NavLinkSolo from "./NavLinkSolo";
import LazyImage from "../helper/LazyImage";
import shuffleArray from "../helper/shuffleArray";

function Partnership({ data = [] }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(6rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(6rem,min-content))]";

  const limit = isMobileMode ? 9 : 15;

  return (
    <>
      <div
        className={` mx-auto grid ${gridColsSetting} items-center justify-center justify-items-center gap-6`}
      >
        {shuffleArray(data)
          .slice(0, limit)
          .map((partner, index) => (
            <div key={index} className="w-20">
              <LazyImage
                src={`${partner.image}`}
                className=" h-full w-full "
                alt={name}
              />
            </div>
          ))}
      </div>
      <div className=" w-full lg:w-[90%] flex justify-end">
        <NavLinkSolo to="/hotel" text="Lihat semua fasilitas Hotel" />
      </div>
    </>
  );
}

export default Partnership;
