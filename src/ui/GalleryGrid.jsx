import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "./Modal";
import NavLinkSolo from "./NavLinkSolo";
import lozad from "lozad";
import FramerReveal from "./FramerReveal";
import LazyImage from "../helper/LazyImage";
import LazyVideo from "../helper/LazyVideo";

function GalleryGrid({ data = [] }) {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 900px)" });

  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  const limit = isMobileMode ? 8 : isTabletMode ? 12 : 15;

  return (
    <div className="">
      {/* Media Container */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2">
        {data?.slice(0, limit).map((file, index) => (
          <FramerReveal key={index}>
            <div
              onClick={() => {
                setFile(file);
                setOpenModal(true);
              }}
              className="overflow-hidden bg-dark rounded-md"
            >
              {file.type === "img" ? (
                // Media
                <div className="relative">
                  <Icon
                    icon="ep:picture-filled"
                    className=" w-8 h-8 self-end text-white opacity-80 cursor-pointer absolute bottom-2 left-2 "
                  />
                  <LazyImage
                    className="lozad object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    // src={file.url}
                    imageSmall={file.imageUrlSM}
                    imageLarge={file.imageUrlLG}
                    alt={`${file}:${index + 1}`}
                  />
                </div>
              ) : (
                <div className="relative">
                  <Icon
                    icon="carbon:play-filled"
                    className=" w-8 h-8 self-end text-white opacity-80 cursor-pointer absolute bottom-2 left-2 "
                  />
                  {/* <video
                    ref={ref}
                    className="lozad object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    alt={`${file}:${index + 1}`}
                  >
                    {entry?.isIntersecting && <source src={file.url} />}
                  </video> */}
                  <LazyVideo
                    // src={file.videoUrlSM}
                    videoSmall={file.videoUrlSM}
                    videoLarge={file.videoUrlLG}
                    alt={`${file}:${index + 1}`}
                    className="lozad object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                  />
                </div>
              )}
            </div>
          </FramerReveal>
        ))}
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className=" w-full h-full">
            {file?.type == "img" ? (
              <LazyImage
                // src={file?.url}
                imageSmall={file.imageUrlSM}
                imageLarge={file.imageUrlLG}
                className="lozad h-full max-h-[32rem] w-full rounded-sm  "
              />
            ) : (
              <video
                className="lozad h-full max-h-[32rem] w-full rounded-sm "
                src={`${
                  isMobileMode ? file?.videoUrlSM : file?.videoUrlLG
                }#t=0.001`}
                // videoSmall={`${file?.videoUrlSM}#t=0.001`}
                // videoLarge={`${file?.videoUrlLG}#t=0.001`}
                autoPlay
                loop
                preload="metadata"
              />
            )}
          </div>
        </Modal>
      )}

      <div className=" flex items-center justify-end">
        <NavLinkSolo text="Lihat semua Dokumentasi" to="/gallery" />
      </div>
    </div>
  );
}

export default GalleryGrid;

{
  /* <div className=" w-full h-full fixed top-0 left-0  bg-[linear-gradient(to_bottom,rgba(252,4,80,0.6),rgba(244,162,11,0.6))]">
        <span className=" cursor-pointer" onClick={() => setFile(null)}>
          &times;
        </span>
        {file?.type == "img" ? (
          <img src={file?.url} />
        ) : (
          <video src={file?.url} autoPlay loop muted />
        )}
      </div> */
}
