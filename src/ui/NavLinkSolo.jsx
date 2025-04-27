import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FramerReveal from "./FramerReveal";

function NavLinkSolo({ to = "", text = "" }) {
  return (
    <FramerReveal>
      <div className=" block group">
        <Link to={to} className="mt-4 md:mt-8 w-fit flex items-center gap-2 ">
          <span className=" opacity-80 group-hover:opacity-100  group-hover:font-semibold duration-300">
            {text}
          </span>
          <Icon
            icon="formkit:linkexternal"
            className="opacity-80 group-hover:opacity-100 scale-75 group-hover:scale-110 duration-300 text-dark"
          />
        </Link>
      </div>
    </FramerReveal>
  );
}

export default NavLinkSolo;
