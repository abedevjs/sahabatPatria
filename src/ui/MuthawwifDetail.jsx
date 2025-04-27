import { useMediaQuery } from "react-responsive";
import FramerReveal from "./FramerReveal";

function MuthawwifDetail({ data = [] }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(10rem,max-content))] ";

  return (
    <div className={`grid ${gridColsSetting} gap-4 justify-center`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className=" w-full flex flex-col items-center justify-center  "
        >
          <FramerReveal>
            <div className=" w-[10rem] bGLinearGradient rounded-tl-md rounded-tr-md ">
              <img src={item.image} alt="" className=" w-full " />
            </div>
            <div className=" bGLinearGradient flex flex-col justify-center items-center -space-y-2">
              <p className=" font-semibold text-lg">{item.name}</p>
              <span className=" text-sm">{item.school}</span>
              <span className=" text-sm">{item.city}</span>
            </div>
          </FramerReveal>
        </div>
      ))}
    </div>
  );
}

export default MuthawwifDetail;
