import { Button, Typography } from "@material-tailwind/react";
import CtaButton from "./CtaButton";
import { useMediaQuery } from "react-responsive";
import { useNavBar } from "../context/NavBarFirst";
import { dataIdentity } from "../../public/docs/dataIdentity";
import lozad from "lozad";
import FramerReveal from "./FramerReveal";
import { Icon } from "@iconify/react/dist/iconify.js";

function MobileContent({ onClick }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  // h-[100dvh] md:h-[80dvh]
  //h-[80dvh]
  return (
    <div className=" w-dvw h-[80dvh] mx-auto pt-0 flex flex-col items-center justify-around overflow-hidden">
      {/* Text and Button */}
      <FramerReveal>
        {/* Text */}
        <div className="flex flex-col items-center gap-8">
          <div className=" flex flex-col text-center">
            {/* Font size = Minimum = 1.3rem@360px - Maximum = 2rem@900px */}
            <Typography
              color="white"
              className="md:w-full mx-auto text-[clamp(1.3rem,0.8333rem+2.0741vw,2rem)] font-semibold opacity-80"
            >
              Healing dan Honeymoon
            </Typography>

            {/* Font size =  Minimum = 1rem@360px - Maximum = 1.5rem@900px */}
            <Typography
              color="white"
              className="mb-4 text-[clamp(1rem,0.6667rem+1.4815vw,1.5rem)] font-semibold opacity-80"
            >
              bersama
            </Typography>

            {/* Font size =  Minimum = 2.5rem@360px - Maximum = 4rem@900px */}
            <h1 className="textShadowAbe text-[clamp(2.5rem,1.5rem+4.4444vw,4rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {dataIdentity.travelName}
            </h1>
            {/* Font size =  Minimum = 1.1rem@360px - Maximum = 1.2rem@900px */}
            {!isMobileMode && (
              <Typography
                // variant="h5"
                color="white"
                className=" mt-8 w-4/5 text-[clamp(1.1rem,0.8852rem+0.5047vw,1.2rem)] text-left self-center font-semibold opacity-80"
              >
                Penyelenggara Haji, Umrah, dan wisata religi Al-Aqsa, Mesir,
                Turki, Dubai, dan Jordan.
              </Typography>
            )}
          </div>

          {/* Button */}
          <div className="">
            {/* <CtaButton theme="light" /> */}
            <button
              className=" py-2 px-6 flex items-center gap-2 rounded-md font-medium text-dark text-[clamp(0.75rem,0.6828rem+0.2985vw,1rem)] bg-secondary"
              onClick={() => onClick("paket")}
            >
              <Icon
                icon="fa:arrow-circle-down"
                className="w-[clamp(1.2rem,1.1194rem+0.3582vw,1.5rem)] h-auto animate-bounce"
              />
              Lihat Paket
            </button>
          </div>
        </div>
      </FramerReveal>

      {/* Image */}
      <FramerReveal>
        <div className="h-[35dvh] md:h-[30dvh] mx-auto">
          <img
            src="/images/ihram6.png"
            className=" h-full w-full block"
            alt="ihram"
          />
        </div>
      </FramerReveal>
    </div>
  );
}

function DesktopContent({ onClick }) {
  const isTabletMode = useMediaQuery({ query: "(max-width: 999px)" });
  const isDesktopMode = useMediaQuery({ query: "(min-width: 1100px)" });
  return (
    <div className="w-full h-[80vh] mx-auto py-4 md:py-0 md:px-10 flex flex-col md:flex-row items-center justify-between md:justify-evenly overflow-hidden">
      {/* Text and Button */}
      <FramerReveal>
        <div className="flex flex-col items-center gap-8">
          <div className=" flex flex-col text-left">
            {/* Font size =  Minimum = 3rem@1000px - Maximum = 3.5rem@2000px */}
            <Typography
              color="white"
              className=" text-[clamp(3rem,2.5rem+0.8vw,3.5rem)] font-semibold opacity-80"
            >
              Healing dan Honeymoon
            </Typography>

            {/* Font size =  Minimum = 1.3rem@1000px - Maximum = 1.7rem@2000px */}
            <Typography
              color="white"
              className="text-[clamp(1.3rem,0.9rem+0.64vw,1.7rem)] font-semibold opacity-80"
            >
              bersama
            </Typography>

            {/* Font size =  Minimum = 3.75rem@1000px - Maximum = 4.5rem@2000px */}
            <h1 className=" mt-2 textShadowAbe text-[clamp(3.75rem,3rem+1.2vw,4.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {dataIdentity.travelName}
            </h1>

            {/* Font size =  Minimum = 1.1rem@1000px - Maximum = 1.4rem@2000px */}
            <Typography
              color="white"
              className=" mt-8 w-4/5 self-start text-[clamp(1.1rem,0.8rem+0.48vw,1.4rem)] font-semibold opacity-80"
            >
              Penyelenggara Haji, Umrah, dan wisata religi Al-Aqsa, Mesir,
              Turki, Dubai, dan Jordan.
            </Typography>
          </div>
          <div>
            {/* <CtaButton /> */}
            <button
              className=" py-2 px-6 rounded-md font-medium bg-secondary text-dark flex items-center gap-2 text-[clamp(0.75rem,0.6828rem+0.2985vw,1rem)]"
              onClick={() => onClick("paket")}
            >
              <Icon
                icon="fa:arrow-circle-down"
                className="w-[clamp(1.2rem,1.1194rem+0.3582vw,1.5rem)] h-auto animate-bounce"
              />
              Lihat Paket
            </button>
          </div>
        </div>
      </FramerReveal>

      {/* Image */}
      <FramerReveal>
        <div className="">
          <img
            src={`/images/${isDesktopMode ? "ihram5" : "ihram6"}.png`}
            className={`${isDesktopMode ? "h-[28rem]" : "h-96"}`}
            alt="ihram"
          />
          <div className="hidden h-8 w-full rounded-md bg-gradient-to-r from-primary to-primaryTint"></div>
        </div>
      </FramerReveal>
    </div>
  );
}

function Header({ onClick }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 1099px)" });
  const isDesktopMode = useMediaQuery({ query: "(min-width: 1100px)" });
  const { isHover } = useNavBar(); //navbar contextAPI
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  // BEGRON GAMBAR
  // bg-[linear-gradient(to_right_bottom,rgba(252,4,80,0.7),rgba(244,162,11,0.7)),url('/public/images/kaaba.jpg')]
  // return (
  //   <div className=" h-[80vh] w-full mx-auto bg-cover bg-center bg-[radial-gradient(circle,rgba(252,4,80,0.7),rgba(244,162,11,0.7)),url('/public/images/kaaba.jpg')]">
  //     <div className=" flex items-center justify-center mx-auto w-full h-full">
  //       <Typography variant="h1" color="dark">
  //         Umrah Mabrurah <br /> dengan <br /> Anindo Amanah
  //       </Typography>
  //     </div>
  //   </div>
  // );

  // bg-[linear-gradient(to_bottom,rgba(252,4,80,0.4),rgba(244,162,11,0.4))]
  //bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5))]

  // BEGRON VIDEO
  // rgba(0,0,0,0.7)
  return (
    <div className={`${!isHover ? "" : "md:-z-[1]"} relative`}>
      {/* OPTION 1: Mobile: IMAGE BG, and DESKTOP: VIDEO BG, activate THIS DIV */}
      {/* <div className="h-[80vh] w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/public/images/kaaba.jpg')] bg-cover bg-center md:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5))] md:rounded-sm"> */}

      {/* OPTION 2: BOTH Mobile and Desktop is using VIDEO BG, activate THIS DIV  h-[100dvh] md:h-[80dvh] atau h-[80dvh]*/}
      <div className=" h-[80dvh] w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5))] md:rounded-sm">
        {/* CONTENT START */}
        {isMobileMode || isTabletMode ? (
          <MobileContent onClick={onClick} />
        ) : (
          <DesktopContent onClick={onClick} />
        )}
        {/* CONTENT END */}
      </div>
      {/* h-[100dvh] md:h-[80dvh] atau h-[80dvh] */}
      <div className=" absolute top-0 left-0 h-[80dvh] w-full -z-[1] overflow-hidden object-cover md:rounded-sm mix-blend-multiply">
        {/* OPTION 1: Mobile: IMAGE BG, and DESKTOP: VIDEO BG, activate THE CODE BELOW  */}
        {/* {!isMobileMode && (
          <video
            className="lozad h-full w-full object-cover object-center "
            autoPlay
            muted
            loop
          >
            <source
              // src={`/videos/${isMobileMode ? "kaabaVid2" : "kaabaVid1"}.mp4`}
              src={`/videos/kaabaVid1.mp4`}
              type="video/mp4"
            />
            Your browser is not supported!
          </video>
        )} */}

        {/* OPTION 2: BOTH Mobile and Desktop is using VIDEO BG, activate THE CODE BELOW  */}
        <video
          className="lozad h-full w-full object-cover object-center "
          autoPlay
          muted
          loop
        >
          <source
            src={`/videos/${
              isMobileMode
                ? "kaabaPotrait4"
                : isTabletMode
                ? "kaabaViewTablet2a"
                : "kaabaViewDesktop1b"
            }.mp4`}
            type="video/mp4"
          />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
}

export default Header;
