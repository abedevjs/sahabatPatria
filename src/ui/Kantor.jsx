import { Typography } from "@material-tailwind/react";
import LazyImage from "../helper/LazyImage";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMediaQuery } from "react-responsive";
import FramerReveal from "./FramerReveal";

function Kantor({ data = [] }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] ";

  return (
    <div
      className={`w-[90dmv] mb-8 mx-auto grid ${gridColsSetting} items-center justify-center justify-items-center gap-4`}
    >
      {/* BOX */}
      {data.map((item, index) => (
        <FramerReveal key={index}>
          <div className="bGLinearGradient w-[20rem] p-4 rounded-md ">
            <div className=" w-full flex gap-2 ">
              {/* IMAGE */}
              <div className=" w-2/3">
                <LazyImage
                  className=" w-full h-auto rounded-md"
                  src={item.image}
                  alt={`bandung`}
                />
              </div>

              {/* DETAILS */}
              <div className=" flex-[100%]  flex flex-col justify-around">
                {/* Nama Kantor */}
                <div className=" self-center flex items-center gap-2">
                  <Typography variant="small">
                    {item.status === "pusat" ? "Pusat" : "Cabang"}:
                  </Typography>
                  <Typography className=" font-semibold">
                    {item.name}
                  </Typography>
                </div>
                {/* Location & Whatsapp */}
                <div className=" flex flex-col gap-1 self-center">
                  {/* Location */}
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon="zondicons:location"
                      className=" w-6 h-6 text-primary opacity-50"
                    />
                    <a
                      href={item.linkGoogleMap}
                      target="_blank"
                      rel="noreferrer"
                      className=" self-end text-xs underline hover:text-primary duration-300"
                    >
                      Lihat di Google Map
                    </a>
                  </div>
                  {/* Whatsapp */}
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon="ri:whatsapp-fill"
                      className=" w-6 h-6 text-primary opacity-50"
                    />
                    <a
                      href={item.linkWhatsApp}
                      target="_blank"
                      rel="noreferrer"
                      className=" self-end text-xs underline hover:text-primary duration-300"
                    >
                      0831-3825-6440
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FramerReveal>
      ))}
    </div>
  );
}

export default Kantor;
