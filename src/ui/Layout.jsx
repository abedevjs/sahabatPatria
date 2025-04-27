import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import NavMenuSmall from "./NavMenuSmall";
import TopBar from "./TopBar";

function Layout() {
  const isTabletModeAndAbove = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="">
      {isTabletModeAndAbove && <TopBar />}
      <NavMenuSmall />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
