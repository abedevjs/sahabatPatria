import { useMediaQuery } from "react-responsive";
import { dataPaketWisataPlus } from "../../public/docs/dataPaket";
import PaketDetailCard from "../ui/PaketDetailCard";
import TitleDivider from "../ui/TitleDivider";
import CtaButton from "../ui/CtaButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import StarIconMaker from "../helper/StarIconMaker";
import FramerReveal from "../ui/FramerReveal";

function PaketWisataPlusPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] `;
  //
  return (
    <div>
      <TitleDivider title={"Pilih Paket Honeymoon Anda"} />
      <div
        className={` w-[95dvw] mb-8 mx-auto grid ${gridColsSetting} justify-items-center justify-center gap-8`}
      >
        {dataPaketWisataPlus.map((item, index) => (
          <PaketDetailCard
            key={index}
            gradColor="rgba(191,102,229,0.7),rgba(148,0,211,0.7)"
            singleColor="rgba(148,0,211,0.7)"
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

export default PaketWisataPlusPage;
