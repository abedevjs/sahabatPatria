import { useMediaQuery } from "react-responsive";
import lozad from "lozad";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";
import {
  dataPaketHaji,
  dataPaketUmrah,
  dataPaketWisataPlus,
} from "../../public/docs/dataPaket";
import { Typography } from "@material-tailwind/react";
import FramerReveal from "./FramerReveal";
import PaketPreviewCard from "./PaketPreviewCard";

function PaketPreview() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  // w-40 md:w-64 h-80 md:h-[32rem]
  // w-[${archWidth}rem] h-[${archHeight}rem]
  // const archWidth = isMobileMode ? 10 : 16;
  // const archHeight = archWidth * 2;
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(16rem,max-content))] `;

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  const { price: umrahPrice } = dataPaketUmrah.at(0);
  const { price: wisataPlusPrice } = dataPaketWisataPlus.at(0);
  const { price: hajiPrice } = dataPaketHaji.at(0);

  return (
    <div
      className={` w-[95dvw] mx-auto grid ${gridColsSetting} justify-items-center justify-center gap-8`}
    >
      {/* UMRAH rgba(28,115,28,0.7),rgba(107,219,107,0.7) */}
      {dataPaketUmrah.slice(0, 1).map((data, index) => (
        <PaketPreviewCard
          key={index}
          title="Umrah"
          link="/umrah"
          gradColor="rgba(28,115,28,0.7),rgba(107,219,107,0.7)"
          data={data}
        />
      ))}

      {/* WISATA PLUS rgba(148,0,211,0.7),rgba(191,102,229,0.7) */}
      {dataPaketWisataPlus.slice(0, 1).map((data, index) => (
        <PaketPreviewCard
          key={index}
          title="Wisata Plus"
          link="/wisata-plus"
          gradColor="rgba(148,0,211,0.7),rgba(191,102,229,0.7)"
          data={data}
        />
      ))}

      {/* HAJI rgba(255,123,0,0.7),rgba(255,162,0,0.7) */}
      {dataPaketHaji.slice(0, 1).map((data, index) => (
        <PaketPreviewCard
          key={index}
          title="Haji"
          link="/haji"
          gradColor="rgba(255,123,0,0.7),rgba(255,162,0,0.7)"
          data={data}
        />
      ))}
    </div>
  );
}

export default PaketPreview;

{
  /* <div
        className={` w-40 md:w-64 h-[20rem] md:h-[26rem] rounded-tr-full rounded-tl-full bg-[linear-gradient(to_right_bottom,rgba(107,219,107,0.7),rgba(28,115,28,0.7)),url('/public/images/kaaba.jpg')] mix-blend-multiply bg-cover bg-center overflow-hidden shadow-md shadow-gray-800 flex flex-col items-center justify-evenly`}
      >
        <div className=" bg-[linear-gradient(to_right_bottom,rgba(107,219,107,0.6),rgba(28,115,28,0.6))]  w-fit rounded-md p-2 text-center">
          <Typography variant="h3" className=" text-gray-900">
            Umrah Reguler
          </Typography>
        </div>
        <div>
          <p>Harga mulai:</p>
          <p>32 Juta</p>
        </div>
        <div>
          <CtaButton />
        </div>
      </div> */
}
