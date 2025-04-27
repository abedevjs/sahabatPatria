import { useMediaQuery } from "react-responsive";
import { dataPaketHaji } from "../../public/docs/dataPaket";
import PaketDetailCard from "../ui/PaketDetailCard";
import TitleDivider from "../ui/TitleDivider";
import CtaButton from "../ui/CtaButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import StarIconMaker from "../helper/StarIconMaker";
import { Typography } from "@material-tailwind/react";
import FramerReveal from "../ui/FramerReveal";

function PaketHajiPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] `;
  return (
    <div>
      <TitleDivider title={"Pilih Paket Haji Anda"} />
      <div
        className={` w-[95dvw] mb-8 mx-auto grid ${gridColsSetting} justify-items-center justify-center gap-8`}
      >
        {dataPaketHaji.map((item, index) => (
          <PaketDetailCard
            key={index}
            gradColor="rgba(255, 162, 0, 0.7),rgba(255, 123, 0, 0.7)"
            singleColor="rgba(255, 123, 0, 0.7)"
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

export default PaketHajiPage;
