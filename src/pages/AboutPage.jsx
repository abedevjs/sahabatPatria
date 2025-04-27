import { useMediaQuery } from "react-responsive";
import {
  dataHistory,
  dataIdentity,
  dataStaff,
} from "../../public/docs/dataIdentity";
import ProfileAvatar from "../ui/ProfileAvatar";
import { TimelineAbe } from "../ui/TimelineAbe";
import TitleDivider from "../ui/TitleDivider";
import FramerReveal from "../ui/FramerReveal";

TimelineAbe;

function AboutPage() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] ";
  return (
    <div>
      <TitleDivider title={`Sekelumit Perjalanan ${dataIdentity.travelName}`} />
      <FramerReveal>
        <div className=" w-full md:w-[90%] px-2 mx-auto ">
          {dataHistory.map((data, index) => (
            <TimelineAbe key={index} data={data} />
          ))}
        </div>
      </FramerReveal>

      <TitleDivider title={`Tim ${dataIdentity.travelName}`} />
      <FramerReveal>
        <div
          className={`w-[90dmv] mb-8 mx-auto grid ${gridColsSetting} items-center justify-center justify-items-center gap-4`}
        >
          {dataStaff.map((data, index) => (
            <ProfileAvatar key={index} data={data} />
          ))}
        </div>
      </FramerReveal>
    </div>
  );
}

export default AboutPage;
