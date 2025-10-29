import { useMediaQuery } from "react-responsive";
import { dataPaketUmrah } from "../../public/docs/dataPaket";
import PaketDetailCard from "../ui/PaketDetailCard";
import TitleDivider from "../ui/TitleDivider";

function PaketUmrahPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] `;

  return (
    <div>
      <TitleDivider title={"Sekali umrah, berkah"} />
      <div
        className={` w-[95dvw] mb-8 mx-auto grid ${gridColsSetting} justify-items-center justify-center gap-8`}
      >
        {dataPaketUmrah.map((item, index) => (
          <PaketDetailCard
            key={index}
            gradColor="rgba(107,219,107,0.8),rgba(28,115,28,0.8)"
            singleColor="rgba(28,115,28,0.8)"
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

export default PaketUmrahPage;
