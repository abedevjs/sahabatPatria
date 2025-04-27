import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { dataIdentity } from "../../public/docs/dataIdentity";

function CtaButton({ theme = "dark" }) {
  return (
    <a
      href={dataIdentity.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={` py-2 px-6 flex items-center gap-2 group text-xs font-semibold rounded-md cursor-pointer ${
        theme == "dark"
          ? "bg-primary text-white"
          : "bg-secondary text-dark group"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" w-[clamp(1.2rem,1.1194rem+0.3582vw,1.5rem)] h-auto group-hover:animate-pulse"
        viewBox="0 0 16 16"
      >
        <path
          fill={theme == "dark" ? "white" : "#1b2631"}
          d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"
        />
      </svg>
      DAFTAR
    </a>
  );
}

export default CtaButton;

{
  /* <Button
      variant="filled"
      size="sm"
      ripple={true}
      className={`flex items-center gap-1 group ${
        theme == "dark" ? "bg-primary text-white" : "bg-secondary text-dark"
      }`}
    >
      <Link className=" flex items-center gap-1" to="/">
        <Icon
          icon="fluent-emoji-high-contrast:plus"
          className=" w-3 h-3 group-hover:rotate-180 duration-300"
        />
        DAFTAR
      </Link>
    </Button> */
}
