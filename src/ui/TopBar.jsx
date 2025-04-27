import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import SocmedIcons from "./SocmedIcons";
import { dataIdentity } from "../../public/docs/dataIdentity";

function TopBar() {
  return (
    <div className="flex mx-auto bg-transparent w-full md:w-[90%] lg:w-4/5 py-4  items-center justify-around ">
      {/* Location */}
      <div className=" flex items-center gap-x-1">
        <Icon
          icon="zondicons:location"
          className=" w-6 h-6 md:w-8 m:h-8 text-primary"
        />
        <div className=" flex flex-col items-start gap-0">
          <div className=" flex items-center gap-x-2">
            <span className=" text-sm">{dataIdentity.location}</span>
            <Icon icon="twemoji:flag-indonesia" />
          </div>
          <a
            href={dataIdentity?.googleMapLink}
            target="_blank"
            rel="noreferrer"
            className=" text-xs underline hover:text-primary duration-300"
          >
            Lihat di Google Map
          </a>
        </div>
      </div>
      {/* Contact */}
      <div className="flex items-center gap-x-1">
        <Icon
          // icon="icomoon-free:mobile"
          icon="ri:whatsapp-fill"
          className="w-6 h-6 md:w-8 m:h-8 text-primary"
        />
        <div className=" flex flex-col items-start gap-0">
          <span className=" text-sm">Kontak</span>
          <a
            href="#"
            className="text-xs underline hover:text-primary duration-300"
            target="_blank"
            rel="noreferrer"
          >
            {dataIdentity.contactNumber}
          </a>
        </div>
      </div>
      {/* Social Icons */}
      <SocmedIcons theme="red" />
    </div>
  );
}

export default TopBar;
