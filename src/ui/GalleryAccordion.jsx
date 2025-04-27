import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import LazyImage from "../helper/LazyImage";
import lozad from "lozad";
import NavLinkSolo from "./NavLinkSolo";
import FramerReveal from "./FramerReveal";

// --_button-size: 3rem;
//   --_panel-padding: 0.75rem;
//   --_panel-gap: 1rem;
const unitCustom = {
  buttonSize: "3rem",
  panelPadding: "0.75rem",
  panelGap: "1rem",
};
//basis-[calc((0.75rem*2)+3rem)]
//grow
//basis-[clamp(15rem,40vh,20rem)]
//clamps a middle value within a range of values between a defined minimum bound and a maximum bound.

// https://www.youtube.com/watch?v=WJERnXiFFug
//https://github.com/kevin-powell/accordion
function GalleryAccordion({ datas }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  return (
    // Wrapper
    <div className=" lg:max-w-[80vw] ms-auto me-auto ps-2 md:ps-0 pe-2 md:pe-0">
      {/* Accordion */}
      <div className=" flex flex-col md:h-[30rem] md:flex-row gap-2 lg:gap-4 m-0">
        {datas?.map((data, index) => (
          // Accordion Panel
          <div
            key={index}
            className={`relative isolate ${
              currentPanel === index
                ? " grow basis-[clamp(15rem,40vh,20rem)]"
                : `basis-[calc((0.75rem*2)+3rem)]`
            } m-0 overflow-hidden p-[0.75rem] pr-[calc(0.75rem*4)] rounded-[calc(((0.75rem*2)+3rem)/2)] focus-within:outline-4 focus-within:outline-${
              data.color
            }   duration-300 cursor-pointer`}
            onClick={() => setCurrentPanel(index)}
          >
            <h2 id="panel-heading">
              {/* accordion-trigger */}
              <button
                className={`m-0  outline-none flex items-center ${
                  currentPanel === index
                    ? "gap-0 bg-[rgba(0,0,0,0.6)]"
                    : "md:gap-20"
                } flex-row-reverse pr-[0.75rem] rounded-[calc(((0.75rem*2)+3rem)/2)]`}
              >
                {/* accordion-title*/}
                <span
                  className={`text-gray-300 ${
                    currentPanel === index ? "font-semibold" : "font-bold"
                  }`}
                >
                  {data?.name}
                </span>
                {/* accordion-icon */}
                <Icon
                  className={`h-[3rem] w-[3rem] p-[0.75rem] rounded-[calc(((0.75rem*2)+3rem)/2)] z-10 bg-[hsl(0 0% 0% / 0.55)] `}
                  style={{ color: `${data.color}` }}
                  icon={`${data?.icon}`}
                />
              </button>
            </h2>
            {/* accordion-content */}
            <div role="region">
              <p
                className={`${
                  currentPanel === index
                    ? "translate-y-0 opacity-100"
                    : "ml-[4rem] translate-y-8 opacity-0"
                } text-gray-300`}
              >
                {/* {data?.description} */}
              </p>
              {/* accordion-image */}

              {/* OPTION 1: ONE IMAGE */}
              <LazyImage
                // src={data?.imageUrl}
                imageSmall={data?.imageUrlSM}
                imageLarge={data?.imageUrlLG}
                className={`lozad max-w-full block absolute inset-0 w-full h-full object-cover -z-[1] duration-300  ${
                  currentPanel === index ? "brightness-100" : "brightness-50"
                }`}
                alt=""
              />

              {/* OPTION 2: TWO IMAGES */}
              {/* <div className={`flex flex-col absolute inset-0 -z-[1] `}>
                {data?.imagePreviewArray.slice(0, 2).map((img, ind) => (
                  <div
                    key={ind}
                    className={` h-1/2 ${(ind + 2) % 2 == 0 ? ` ` : " "} bg-[]`}
                  >
                    <LazyImage
                      className={`lozad block w-full h-full object-cover object-center duration-300 ${
                        currentPanel === index
                          ? "brightness-100"
                          : "brightness-50"
                      } border border-${ind % 2 == 0 ? " " : ``}`}
                      src={img}
                      alt=""
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <NavLinkSolo to="/ziarah" text="Lihat semua tempat Ziarah" />
      </div>
    </div>
  );
}

export default GalleryAccordion;
// style={{
//   clipPath: `${
//     (ind + 2) % 2 == 0
//       ? "polygon(0 0, 0% 100%, 100% 0)"
//       : "polygon(100% 100%, 0% 100%, 100% 0)"
//   }`,
// }}
