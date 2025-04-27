import { useMediaQuery } from "react-responsive";
import TitleDivider from "../ui/TitleDivider";
import dataTransportasi from "../../public/docs/dataTransportasi";
import ContentAndImageSlider from "../ui/ContentAndImageSlider";

function TransportasiPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(20rem,min-content))]";

  return (
    <div>
      <TitleDivider title="Fasilitas Transportasi Ternyaman" />
      <div
        className={`max-w-[90%] mb-8 mx-auto grid ${gridColsSetting} items-center justify-items-center justify-center gap-6 `}
      >
        {dataTransportasi.map((item, index) => (
          <ContentAndImageSlider key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default TransportasiPage;
