import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import CtaButton from "./CtaButton";
import Logo from "./Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useNavBar } from "../context/NavBarFirst";

const menuMain = [
  { name: "Home", link: "/home" },
  { name: "Tentang Kami", link: "/about" },
  { name: "Gallery", link: "/gallery" },
];

const menuLinks = [
  // { name: "Home", subMenu: false },
  {
    name: "Paket",
    subMenu: true,
    sublinks: [
      {
        name: "Healing",
        link: "/umrah",
        icon: "fa-solid:mosque",
        description: "Umrah premium berulang kali",
      },
      {
        name: "Honeymoon",
        link: "/wisata-plus",
        icon: "fluent-emoji-high-contrast:castle",
        description: "Menjalajahi Timur Tengah dan Eropa",
      },
      {
        name: "Haji",
        link: "/haji",
        icon: "fa6-solid:kaaba",
        description: "Haji VIP tanpa antri",
      },
    ],
  },
  {
    name: "Fasilitas",
    subMenu: true,
    sublinks: [
      {
        name: "Hotel",
        link: "/hotel",
        icon: "ri:hotel-fill",
        // description: "Layanan berkelas selama 24 jam",
        description: "Rehat dan Jamuan ala Sultan",
      },
      {
        name: "Transportasi",
        link: "/transportasi",
        icon: "mdi:plane-train",
        // description: "Perjalanan nyaman, ringan, tanpa letih",
        description: "Perjalanan nyaman, ringan, tanpa letih",
      },
      {
        name: "Perlengkapan",
        link: "/perlengkapan",
        icon: "material-symbols:travel-luggage-and-bags-rounded",
        description: "Atribut lengkap dan ekslusif",
      },
      {
        name: "Ziarah",
        link: "/ziarah",
        icon: "bxs:landscape",
        description: "Mengenal tempat dan sejarah para Nabi",
      },
      {
        name: "Muthawwif",
        link: "/muthawwif",
        icon: "mdi:teacher",
        description: "Profil para asatidz pembimbing ibadah",
      },
    ],
  },
];

function NavLinks({ onClose }) {
  const [heading, setHeading] = useState("");
  // const [subHeading, setSubHeading] = useState("");
  const { isHover, toggleIsHover } = useNavBar();

  return (
    <>
      {menuLinks.map((link, i) => (
        <div key={i}>
          <div
            onClick={() => {
              heading !== link.name ? setHeading(link.name) : setHeading("");
              // setSubHeading("");
            }}
            className=" text-left md:cursor-pointer group pl-4 md:pl-0 "
          >
            <Typography
              className=" py-0 md:py-5 font-medium flex justify-between items-center md:pr-0 pr-5 group"
              onMouseEnter={toggleIsHover}
              onMouseLeave={toggleIsHover}
            >
              {link.name}
              <Icon
                className=" w-4 h-4 md:hidden inline"
                icon={`${
                  heading === link.name ? "ion:chevron-up" : "ion:chevron-down"
                }`}
                // onClick={() => {
                //   heading !== link.name
                //     ? setHeading(link.name)
                //     : setHeading("");
                //   // setSubHeading("");
                // }}
              />
              <Icon
                className=" w-4 h-4 md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 duration-300"
                icon="ion:chevron-down"
              />
            </Typography>
            {link.subMenu && (
              <div onMouseEnter={toggleIsHover} onMouseLeave={toggleIsHover}>
                <div className=" absolute top-16 hidden  group-hover:block hover:md:block ">
                  <div className="py-3 hidden md:block">
                    <div className=" w-4 h-4 left-3 absolute mt-1 rotate-45 -z-10 bg-primary"></div>
                  </div>
                  <div className=" py-3 px-4 hidden md:block rounded-md shadow-none md:shadow-md bg-gradient-to-b from-primary to-primaryTint ">
                    {link.sublinks.map((l, i) => (
                      <div key={i} className="hidden md:block ">
                        <NavLink
                          to={l.link}
                          className=" py-1 px-4 rounded-sm duration-300 flex items-center space-x-4 hover:bg-gray-800 "
                        >
                          <Icon
                            icon={l.icon}
                            className=" w-7 h-7 text-gray-200"
                          />
                          <div className=" flex flex-col items-stretch text-gray-200">
                            <Typography className=" font-medium">
                              {l.name}
                            </Typography>
                            <span className=" text-sm font-light">
                              {l.description}
                            </span>
                          </div>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE MODE */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((sl, i) => (
              <div key={i}>
                <NavLink
                  to={sl.link}
                  className=" flex items-center pl-7"
                  onClick={onClose}
                >
                  <Icon icon={sl.icon} className=" w-8 h-8 text-gray-200" />
                  <div className=" flex flex-col items-start py-2 pl-4 md:pr-0 pr-5">
                    <Typography className="  font-medium flex justify-between items-center">
                      {sl.name}
                    </Typography>
                    <span className="text-sm">{sl.description}</span>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" w-full md:w-[90%] py-2 mx-auto md:rounded-lg shadow-md bGLinearGradientNav duration-300">
      <div className="flex items-center justify-around">
        <div className=" z-20 px-4 md:px-0  md:w-auto w-full flex items-center justify-between ">
          <Logo />
          <div onClick={() => setOpen(!open)}>
            <Icon
              icon={`majesticons:${open ? "close" : "menu"}`}
              className=" w-8 h-8 md:hidden text-gray-200"
            />
          </div>
        </div>
        <ul className=" md:flex hidden items-center sm:gap-0 md:gap-8 lg:gap-16 text-gray-200">
          {menuMain.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className=" inline-block duration-300 hover:text-gray-800"
              >
                <Typography className=" font-medium">{item.name}</Typography>
              </NavLink>
            </li>
          ))}
          <NavLinks onClose={() => setOpen(!open)} />
        </ul>
        <div className=" md:block hidden">
          <CtaButton theme="light" />
        </div>
        {/* MOBILE MODE */}
        <ul
          className={`md:hidden z-10 absolute w-screen h-screen top-[0rem] py-24 pl-4 duration-500 space-y-6 ${
            open ? "left-0" : "left-[-100%]"
          } bg-gradient-to-b from-primary to-primaryTint text-gray-200`}
        >
          {menuMain.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className=" px-3 inline-block"
                onClick={() => setOpen(!open)}
              >
                <Typography className=" font-medium">{item.name}</Typography>
              </NavLink>
            </li>
          ))}
          <NavLinks onClose={() => setOpen(false)} />
          <div className=" py-5 w-fit">
            <CtaButton theme="light" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

function NavMenuSmall() {
  return (
    <div className="sticky top-0 left-0 z-50">
      <NavBar />
    </div>
  );
}

export default NavMenuSmall;
