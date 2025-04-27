import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CtaButton from "./CtaButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const testLinks = [
    {
      name: "Men",
      subMenu: true,
      subLinks: [
        {
          Head: "Topwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Bottom",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Inner",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Footwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      name: "Women",
      subMenu: true,
      subLinks: [
        {
          Head: "Topwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Bottom",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Inner",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Footwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
      ],
    },

    {
      name: "Kids",
      subMenu: true,
      subLinks: [
        {
          Head: "Topwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Bottom",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Inner",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
        {
          Head: "Footwear",
          sublink: [
            {
              name: "Tshirt",
              link: "/",
            },
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal",
              link: "/",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {testLinks.map((link, index) => (
        <div key={index}>
          <div className=" px-3 text-left md:cursor-pointer group">
            <Typography
              className=" py-7 flex justify-between items-center md:pr-0 pr-5 group
              "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <Icon
                className=" w-4 h-4 md:hidden inline"
                icon={`${
                  heading === link.name ? "ion:chevron-up" : "ion:chevron-down"
                }`}
              />
              <Icon
                className=" w-4 h-4 md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180"
                icon="ion:chevron-down"
              />
            </Typography>
            {link.subMenu && (
              <div>
                <div className=" absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className=" w-4 h-4 left-3 absolute mt-1 bg-yellow-100 rotate-45"></div>
                  </div>
                  <div className=" bg-yellow-100 p-5 grid grid-cols-3 gap-10">
                    {link.subLinks.map((mysublinks, index) => (
                      <div key={index}>
                        <Typography>{mysublinks.Head}</Typography>
                        {mysublinks.sublink.map((slink, index) => (
                          <li key={index} className=" my-2.5">
                            <Link
                              to={slink.link}
                              className=" hover:text-primary"
                            >
                              <Typography variant="small">
                                {slink.name}
                              </Typography>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE MODE */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.subLinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <Typography
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className=" py-4 pl-7 md:pr-0 pr-5 font-semibold flex justify-between items-center "
                  >
                    {slinks.Head}
                    <Icon
                      className=" w-4 h-4 md:mt-1 md:ml-2 inline"
                      icon={`${
                        subHeading === slinks.Head
                          ? "ion:chevron-up"
                          : "ion:chevron-down"
                      }`}
                    />
                  </Typography>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className=" py-3 pl-14">
                        <Link
                          to={slink.link}
                          className=" hover:text-primaryBlue"
                        >
                          <Typography>{slink.name}</Typography>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
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
    <nav className=" bg-yellow-100">
      <div className=" flex items-center justify-around font-medium">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between ">
          <img
            src="logoComplete-transparent.png"
            alt=""
            className="  h-12 w-12 md:cursor-pointer"
          />
          <div onClick={() => setOpen(!open)}>
            <Icon
              icon={`majesticons:${open ? "close" : "menu"}`}
              className=" w-12 h-12 md:hidden"
            />
          </div>
        </div>
        <ul className=" md:flex hidden items-center gap-8">
          <li>
            <Link to="/" className=" py-7 px-3 inline-block">
              <Typography>Home</Typography>
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className=" md:block hidden">
          <CtaButton />
        </div>

        {/* MOBILE MODE */}
        <ul
          className={`md:hidden z-10 bg-yellow-100 absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link to="/" className=" py-7 px-3 inline-block">
              <Typography>Home</Typography>
            </Link>
          </li>
          <NavLinks />
          <div className=" py-5">
            <CtaButton />
          </div>
        </ul>
      </div>
    </nav>
  );
}

function NavMenuBig() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default NavMenuBig;
