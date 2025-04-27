import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FramerReveal from "./FramerReveal";

function PaketPreviewCard({
  gradColor = "",
  title = "",
  link = "",
  data = {},
}) {
  return (
    <FramerReveal>
      <div
        className={`w-64 h-[26rem] p-2 pb-3 rounded-tr-full rounded-tl-full shadow-md shadow-gray-800 hover:shadow-lg hover:shadow-gray-800 duration-300 `}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to right bottom, ${gradColor}), ${data.bgImage}`,
          }}
          className="lozad w-full h-1/2 rounded-tr-full rounded-tl-full mix-blend-multiply bg-cover bg-center bg-black overflow-hidden"
        ></div>
        <div className="h-1/2  w-full flex flex-col items-center justify-between">
          <div className=" h-1/2 flex flex-col justify-between">
            <Typography
              variant="h3"
              color="white"
              style={{
                backgroundImage: `linear-gradient(to right bottom, ${gradColor})`,
              }}
              className="py-1 px-4 -translate-y-1/2 font-normal rounded-sm  mb-2 text-center"
            >
              {title}
            </Typography>
            <Typography variant="small" className=" text-center">
              Harga termurah:
            </Typography>
            <Typography
              variant="h1"
              className=" after:content-['juta'] after:text-xl after:ml-2 text-gray-800 text-center"
            >
              {data.price}
            </Typography>
          </div>
          <div>
            <Link
              to={`${link}`}
              style={{ backgroundColor: `${gradColor}` }}
              className="py-2 px-4 text-white  flex items-center gap-1 group text-sm tracking-wider font-semibold rounded-md hover:shadow-md hover:shadow-gray-800 duration-300"
            >
              LIHAT DETAIL
              <Icon icon="formkit:linkexternal" className=" w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </FramerReveal>
  );
}

export default PaketPreviewCard;
