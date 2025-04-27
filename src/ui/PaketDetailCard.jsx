import { Typography } from "@material-tailwind/react";
import CtaButton from "./CtaButton";
import StarIconMaker from "../helper/StarIconMaker";
import { Icon } from "@iconify/react/dist/iconify.js";
import FramerReveal from "./FramerReveal";
function PaketDetailCard({ gradColor = "", singleColor = "", data = {} }) {
  const {
    name,
    bgImage,
    countryName,
    star,
    price,
    days,
    monthDeparture,
    start,
    flight,
    hotelsArr,
    ziarah,
  } = data;

  // h-[54rem]
  return (
    <FramerReveal>
      <div className="w-[20rem] h-fit p-2 pb-3 rounded-tr-full rounded-tl-full shadow-md shadow-gray-800 hover:shadow-lg hover:shadow-gray-800 duration-300 flex flex-col justify-between">
        {/* TITLE */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right bottom, ${gradColor}), ${bgImage}`,
          }}
          className={`lozad w-full h-1/2 min-h-[18rem] rounded-tr-full rounded-tl-full mix-blend-multiply bg-cover bg-center bg-black overflow-hidden flex items-end justify-start`}
        >
          <div
            className={`w-fit py-1 px-2 text-white bg-[linear-gradient(to_right_bottom,${gradColor})] mb-2`}
          >
            <Typography variant="h4" className=" font-normal rounded-sm">
              {name}
            </Typography>
            {countryName && <span className=" text-2xl">{countryName}</span>}
          </div>
        </div>
        {/* PRICE, STARS, DAYS */}
        <div className=" w-full mb-4">
          <Typography
            variant="h3"
            className=" after:content-['juta*'] after:text-xl after:ml-2 text-gray-800 text-center"
          >
            {price}
          </Typography>
          <div className=" flex items-center justify-between">
            <div>
              <StarIconMaker star={star} size={4} />
            </div>
            <span>{days} hari</span>
          </div>
        </div>
        {/* DETAILS */}
        <div className=" w-full space-y-1 mx-auto border-b-2 border-gray-400 pb-4 mb-2">
          {/* Berangkat */}
          <div className=" flex items-center justify-between">
            <div style={{ color: `${singleColor}` }}>
              <Icon icon="mdi:calendar" className={` w-5 h-auto `} />
            </div>
            <span className=" text-sm">{monthDeparture}</span>
          </div>
          {/* Start */}
          <div className=" flex items-center justify-between">
            <div style={{ color: `${singleColor}` }}>
              <Icon
                icon="gis:route-start"
                className={` w-5 h-auto ${singleColor}`}
              />
            </div>
            <span className=" text-sm">{start}</span>
          </div>
          {/* Flight */}
          <div className=" flex items-center justify-between">
            <div style={{ color: `${singleColor}` }}>
              <Icon
                icon="material-symbols:flight-takeoff"
                className={` w-5 h-auto ${singleColor}`}
              />
            </div>
            <span className=" text-sm">{flight}</span>
          </div>
          {/* Hotel */}
          {hotelsArr.map((hotel, index) => (
            <div key={index} className=" flex items-center justify-between">
              <div style={{ color: `${singleColor}` }}>
                <Icon
                  icon="ic:round-hotel"
                  // icon="ri:hotel-fill"

                  className={` w-5 h-auto ${singleColor}`}
                />
              </div>
              <span className=" text-sm after:content-['**'] after:text-xs">
                {hotel}
              </span>
            </div>
          ))}

          {/* Perlengkapan */}
          <div className=" flex items-center justify-between">
            <div style={{ color: `${singleColor}` }}>
              <Icon
                icon="material-symbols:travel-luggage-and-bags-rounded"
                className={` w-5 h-auto ${singleColor}`}
              />
            </div>
            <span className=" text-sm">Perlengkapan dan Souvenir</span>
          </div>

          {/* Ziarah */}
          <div className=" flex flex-col items-start justify-between">
            <p
              style={{ color: `${singleColor}` }}
              className={`text-xs font-semibold`}
            >
              Tempat yang akan dikunjungi:
            </p>
            <span className=" text-xs">{ziarah}</span>
          </div>
        </div>
        {/* DISCLAIMER */}
        <div className="text-xs italic">
          <p className=" before:content-['*']">
            Harga belum termasuk: Pembuatan paspor, vaksin (jika diperlukan),
            kelebihan bagasi.
          </p>
          <p className=" before:content-['**']">Atau setaraf</p>
        </div>

        {/* CTA BUTTON */}
        <div className=" mt-4 w-fit mx-auto ">
          <CtaButton />
        </div>
      </div>
    </FramerReveal>
  );
}

export default PaketDetailCard;

{
  /* <Link
        to={linkTo}
        className="py-2 px-4 text-white   flex items-center gap-1 group text-xs font-semibold rounded-md bg-green-500 hover:shadow-md hover:shadow-gray-800 duration-300"
      >
        LIHAT DETAIL
        <Icon icon="formkit:linkexternal" className=" w-3 h-3" />
      </Link> */
}
