import { Typography } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";
import { dataIdentity } from "../../public/docs/dataIdentity";

function AboutPreview() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  return (
    <div className=" w-dvw md:w-[90%] p-4 h-full mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-8 bGLinearGradient rounded-tl-[30%] rounded-tr-md rounded-bl-md rounded-br-[30%] overflow-hidden ">
      <div className=" w-full lg:w-1/2 self-center">
        <p className=" text-[clamp(0.8rem,0.6925rem+0.4776vw,1.2rem)] font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          quibusdam non repellendus soluta. Amet, ea nesciunt sequi neque totam
          eligendi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          veniam, enim mollitia ipsum quidem id.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          quidem?
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          quidem?
        </p>
      </div>
      <div className=" max-w-[40rem] max-h-[30rem] rounded-md overflow-hidden">
        <img
          src={`/images/dokumentasi/${
            isMobileMode ? "anangSM" : "anangLG"
          }.png`}
          className=" block h-full w-full"
          alt={dataIdentity.companyName}
        />
      </div>
    </div>
  );
}

export default AboutPreview;
