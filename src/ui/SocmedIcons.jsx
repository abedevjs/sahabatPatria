import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import { dataIdentity } from "../../public/docs/dataIdentity";

function SocmedIcons({ theme = "red" }) {
  return (
    <div className=" flex items-center space-x-[2px] md:space-x-2">
      {/* <Typography
        as="a"
        href={dataIdentity?.whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          icon="ri:whatsapp-fill"
          className={`w-5 h-5 ${
            theme == "red"
              ? " text-primary hover:text-dark"
              : "text-dark hover:text-white"
          } duration-300`}
        />
      </Typography> */}
      <Typography
        as="a"
        href={dataIdentity?.instagramLink}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          icon="ri:instagram-fill"
          className={`w-5 h-5 ${
            theme == "red"
              ? " text-primary hover:text-dark"
              : "text-dark hover:text-white"
          } duration-300`}
        />
      </Typography>
      <Typography
        as="a"
        href={dataIdentity?.facebookLink}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          icon="mdi:facebook"
          className={`w-5 h-5 ${
            theme == "red"
              ? " text-primary hover:text-dark"
              : "text-dark hover:text-white"
          } duration-300`}
        />
      </Typography>
      <Typography
        as="a"
        href={dataIdentity?.youtubeLink}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          icon="bi:youtube"
          className={`w-5 h-5 ${
            theme == "red"
              ? " text-primary hover:text-dark"
              : "text-dark hover:text-white"
          } duration-300`}
        />
      </Typography>
    </div>
  );
}

export default SocmedIcons;
