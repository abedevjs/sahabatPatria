import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "./Modal";
import { useState } from "react";
import LazyImage from "../helper/LazyImage";
import { useNavBar } from "../context/NavBarFirst";
import lozad from "lozad";
import FramerReveal from "./FramerReveal";
import LazyVideo from "../helper/LazyVideo";

const breakpoints = { default: 4, 1536: 4, 1280: 4, 1024: 3, 768: 3, 640: 2 };
const copy = [
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "https://docs.material-tailwind.com/img/team-3.jpg",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "/images/contoh1.jpg",
  },
  {
    type: "img",
    url: "/images/contoh2.jpg",
  },
];
const examples = [
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "https://docs.material-tailwind.com/img/team-3.jpg",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "/images/contoh1.jpg",
  },
  {
    type: "img",
    url: "/images/contoh2.jpg",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "https://docs.material-tailwind.com/img/team-3.jpg",
  },
  {
    type: "img",
    url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    type: "img",
    url: "/images/contoh1.jpg",
  },
  {
    type: "img",
    url: "/images/contoh2.jpg",
  },
];

function GalleryMasonry({ data = [] }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { isHover } = useNavBar();

  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  return (
    <div className={`${!isHover ? "" : "relative md:-z-[1]"}`}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map((file, index) => (
          <FramerReveal key={index}>
            <div
              onClick={() => {
                setFile(file);
                setOpenModal(true);
              }}
              className="overflow-hidden bg-dark rounded-md"
            >
              {file.type === "img" ? (
                // Image
                <div className="relative">
                  <Icon
                    icon="ep:picture-filled"
                    className=" w-8 h-8 self-end text-white opacity-80 cursor-pointer absolute bottom-2 left-2 "
                  />
                  {/* <img
                  className="object-cover object-center  rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                  src={file.url}
                  alt={`${file}:${index + 1}`}
                /> */}
                  <LazyImage
                    type={file.type}
                    // src={file.url}
                    imageSmall={file.imageUrlSM}
                    imageLarge={file.imageUrlLG}
                    className="lozad lazy-image object-cover object-center  rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    alt={`${file}:${index + 1}`}
                  />
                </div>
              ) : (
                // Video
                <div className="relative">
                  <Icon
                    icon="carbon:play-filled"
                    className=" w-8 h-8 self-end text-white opacity-80 cursor-pointer absolute bottom-2 left-2 "
                  />
                  {/* <video
                    className="lozad object-cover object-center  rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    alt={`${file}:${index + 1}`}
                    preload="metadata"
                  >
                    <source src={file.url} />
                  </video> */}
                  <LazyVideo
                    alt={`${file}:${index + 1}`}
                    className="lozad object-cover object-center  rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    videoSmall={file.videoUrlSM}
                    videoLarge={file.videoUrlLG}
                  />
                </div>
              )}
            </div>
          </FramerReveal>
        ))}
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
                  // src={`${file?.url}#t=0.001`}
                  src={`${
                    isMobileMode ? file?.videoUrlSM : file?.videoUrlLG
                  }#t=0.001`}
                  autoPlay
                  loop
                  preload="metadata"
                />
              )}
            </div>
          </Modal>
        )}
      </Masonry>
    </div>
  );
}

export default GalleryMasonry;
