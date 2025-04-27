import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

// --_button-size: 3rem;
//   --_panel-padding: 0.75rem;
//   --_panel-gap: 1rem;
//basis-[calc((0.75rem*2)+3rem)]
//grow
//basis-[clamp(15rem,40vh,20rem)]

// https://www.youtube.com/watch?v=WJERnXiFFug
//https://github.com/kevin-powell/accordion
function GalleryAccordionOriginal({ datas }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  return (
    <div className=" max-w-[50rem]  ms-auto me-auto ps-4 pe-4">
      {/* Accordion */}
      <div className=" flex flex-col md:h-[30rem] md:flex-row gap-4 border border-black m-0">
        {datas?.map((data, index) => (
          // Accordion Panel
          <div
            key={index}
            className={`relative isolate ${
              currentPanel === index
                ? " grow basis-[clamp(15rem,40vh,20rem)]"
                : "basis-[calc((0.75rem*2)+3rem)]"
            } m-0 overflow-hidden p-3 pr-[calc(0.75rem*4)] rounded-[calc(((0.75rem*2)+3rem)/2)] focus-within:outline-4 focus-within:outline-${
              data.color
            }   duration-300 cursor-pointer`}
            onClick={() => setCurrentPanel(index)}
          >
            <h2 id="panel-heading">
              {/* accordion-trigger */}
              <button className=" m-0 outline-none flex items-center gap-12 flex-row-reverse bg-transparent border-0 p-0">
                {/* accordion-title*/}
                <span
                  style={{ color: `${data.color}` }}
                  className=" relative isolate grid items-center after:[content:''] after:absolute after:left-[calc((1rem+3rem)*-1)] after:w-[calc(100%+(3rem*2))] after:h-[3rem] after:bg-[hsl(0 0% 0% / 0.5)] after:-z-[1] after:rounded-[100vw]"
                >
                  {data?.name}
                </span>
                {/* accordion-icon */}
                <Icon
                  className="h-12 w-12 p-3 rounded-[50%] z-10 bg-[hsl(0 0% 0% / 0.55)] "
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
                {data?.description}
              </p>
              {/* accordion-image */}
              <img
                src={data.imageUrl}
                className={`max-w-full block absolute inset-0 w-full h-full object-cover -z-[1] duration-300 ${
                  currentPanel === index && "brightness-50"
                }`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryAccordionOriginal;
