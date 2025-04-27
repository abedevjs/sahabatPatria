import { useMediaQuery } from "react-responsive";
import dataHotel from "../../public/docs/dataHotel";
import ContentAndImageSlider from "../ui/ContentAndImageSlider";
import TitleDivider from "../ui/TitleDivider";

function HotelPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(20rem,min-content))]";

  return (
    <div>
      <TitleDivider title="Rehat dan Jamuan ala Sultan" />
      <div
        className={`max-w-[90%] mb-8 mx-auto grid ${gridColsSetting} items-center justify-items-center justify-center gap-6 `}
      >
        {dataHotel.map((item, index) => (
          <ContentAndImageSlider key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HotelPage;
