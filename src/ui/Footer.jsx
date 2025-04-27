import { Typography } from "@material-tailwind/react";
import Logo from "./Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import SocmedIcons from "./SocmedIcons";
import { dataIdentity } from "../../public/docs/dataIdentity";

const LINKS = [
  {
    title: "Perusahaan",
    items: [
      {
        name: "Tentang Kami",
        link: "/about",
      },
      {
        name: "Dokumentasi",
        link: "/gallery",
      },
    ],
  },
  {
    title: "Situs",
    items: [
      {
        name: "Partners",
        link: "/",
      },
      {
        name: "Testimoni",
        link: "/",
      },
      {
        name: "FAQ",
        link: "/",
      },
    ],
  },
  {
    title: "Paket",
    items: [
      {
        name: "Umrah",
        link: "/umrah",
      },
      {
        name: "Wisata Plus",
        link: "/wisata-plus",
      },
      {
        name: "Haji",
        link: "/haji",
      },
    ],
  },
  {
    title: "Fasilitas",
    items: [
      {
        name: "Hotel",
        link: "/hotel",
      },
      {
        name: "Transportasi",
        link: "/transportasi",
      },
      {
        name: "Perlengkapan",
        link: "/perlengkapan",
      },
      {
        name: "Ziarah",
        link: "/ziarah",
      },
      {
        name: "Muthawwif",
        link: "/muthawwif",
      },
    ],
  },
];
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full  md:w-[90%] pt-4 mx-auto md:rounded-lg shadow-md bGLinearGradientFooter ">
      <div className=" flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around">
        {/* Company and Socmeds */}
        <div className=" flex flex-col items-center gap-2 md:gap-4">
          <div className=" flex flex-col items-center ">
            <Logo />
            <Typography variant="h6" color="black" className=" font-normal">
              {dataIdentity.companyName}
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <SocmedIcons theme="dark" />
            <span className=" text-sm text-dark font-light">
              &copy; Content {`${currentYear}`} by {dataIdentity.copyrightName}
            </span>
          </div>
        </div>
        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-x-20 md:gap-x-12 gap-y-4 md:gap-y-0 text-dark">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="paragraph"
                color="black"
                className="font-medium opacity-40 "
              >
                {title}
              </Typography>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className=" hover:text-white duration-300"
                  >
                    <Typography variant="small" className=" font-medium">
                      {item.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="w-full pl-4 md:pl-0 text-sm md:text-center ">
        &copy; Design {`${currentYear}`} and creation with 💚 by{" "}
        <a
          href={`https://api.whatsapp.com/send/?phone=6283138256440&text=Assalaamu+'alaikum...+Saya+dapat+nomor+ini+dari+webpage+${dataIdentity.travelName}%21&type=phone_number&app_absent=0`}
          target="_blank"
          rel="noreferrer"
          className=" hover:text-white duration-300"
        >
          Abé
        </a>
      </p>
    </footer>
  );
}

export default Footer;
