import { useMediaQuery } from "react-responsive";
import dataMilestone from "../../public/docs/dataMilestone";
import FramerCounter from "./FramerCounter";

function Milestone() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? "grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]"
    : "grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]";
  //"mx-auto grid grid-rows-[repeat(1fr,minmax(20rem,20rem))] grid-cols-[repeat(auto-fit,minmax(6rem,7rem))] items-center justify-center gap-6"
  return (
    <div className=" flex flex-col gap-8">
      {/* TOTAL JAMAAH */}
      <div className=" flex flex-col -space-y-4 md:-space-y-5 justify-center items-center">
        <div className=" flex items-baseline gap-2">
          <svg
            className=" h-[clamp(1.5rem,1.2313rem+1.194vw,2.5rem)] w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="#9e9e9e"
              d="M5 16v-5.3c-.6-.3-1-1-1-1.7V5c0-.7.4-1.3 1-1.7V3c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2H1c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1v5zM15 5h-2c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2v.3c.6.4 1 1 1 1.7v4c0 .7-.4 1.4-1 1.7V16h4v-5c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1m-5-3a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"
            />
            <path
              fill="#9e9e9e"
              d="M10 4H6c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1v6h4v-6c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1"
            />
          </svg>
          <p className=" text-[clamp(3rem,2.4627rem+2.3881vw,5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
            {<FramerCounter to={dataMilestone.jamaah} />}+
            <span className=" ml-1 text-[clamp(1.25rem,0.9813rem+1.194vw,2.25rem)] text-gray-500">
              Jama`ah
            </span>
          </p>
        </div>

        <span className=" text-[clamp(0.8rem,0.7194rem+0.3582vw,1.1rem)] font-extralight text-center md:text-left">
          {/* memilih bersama {dataIdentity.travelName} */}
          telah menunaikan ibadah haji dan umrah bersama kami
        </span>
      </div>

      {/* STATISTIK LAIN */}
      <div
        style={{
          gridTemplateColumns:
            "repeat(auto-fit,minmax(8rem,clamp(10rem, 7.8507rem + 9.5522vw, 18rem)))",
          // "repeat(auto-fit,minmax(8rem,clamp(10rem, 8.6567rem + 5.9701vw, 15rem)))",
        }}
        className="w-full mx-auto grid grid-rows-[repeat(1fr,minmax(20rem,20rem))] justify-center gap-6 md:gap-0"
      >
        {/* UMUR */}
        <div className=" flex flex-col -space-y-2 md:-space-y-4 justify-center items-center">
          <div className="flex items-baseline gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-[clamp(1rem,0.7313rem+1.194vw,2rem)] w-auto"
              viewBox="0 0 36 36"
            >
              <path
                fill="#9e9e9e"
                d="M31.25 7.4a44 44 0 0 1-6.62-2.35a45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12l.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59Zm-4.57 6.65L15.51 24.9l-6.32-6.33a1.4 1.4 0 0 1 2-2L15.54 21l9.19-9a1.4 1.4 0 1 1 2 2Z"
                className="clr-i-solid clr-i-solid-path-1"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <h1 className=" text-[clamp(2rem,1.597rem+1.791vw,3.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {<FramerCounter to={dataMilestone.umur} />}
              <span className="ml-1 text-[clamp(0.9rem,0.6582rem+1.0746vw,1.8rem)] text-gray-500">
                Tahun
              </span>
            </h1>
          </div>
          <span className="text-[clamp(0.7rem,0.6194rem+0.3582vw,1rem)] font-extralight text-center md:text-left">
            setia melayani
          </span>
        </div>

        {/* TOTAL RATING */}
        <div className=" flex flex-col -space-y-2 md:-space-y-4 justify-center items-center">
          <div className="flex items-baseline gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-[clamp(1rem,0.7313rem+1.194vw,2rem)] w-auto"
              viewBox="0 0 512 512"
            >
              <path
                fill="#9e9e9e"
                d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24M64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24M384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452"
              />
            </svg>
            <h1 className=" text-[clamp(2rem,1.597rem+1.791vw,3.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {<FramerCounter to={dataMilestone.rating} rounded={false} />}
              <span className="ml-1 text-[clamp(0.9rem,0.6582rem+1.0746vw,1.8rem)] text-gray-500">
                /5
              </span>
            </h1>
          </div>
          <span className="text-[clamp(0.7rem,0.6194rem+0.3582vw,1rem)] font-extralight text-center md:text-left">
            rating kepuasan
          </span>
        </div>

        {/* TOTAL DESTINASI */}
        <div className=" flex flex-col -space-y-2 md:-space-y-4 justify-center items-center">
          <div className="flex items-baseline gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-[clamp(1rem,0.7313rem+1.194vw,2rem)] w-auto"
              viewBox="0 0 512 512"
            >
              <path
                fill="#9e9e9e"
                d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
              />
            </svg>
            <h1 className=" text-[clamp(2rem,1.597rem+1.791vw,3.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {<FramerCounter to={dataMilestone.destinasi} />}
              <span className="ml-1 text-[clamp(0.9rem,0.6582rem+1.0746vw,1.8rem)] text-gray-500">
                Destinasi
              </span>
            </h1>
          </div>

          <span className="text-[clamp(0.7rem,0.6194rem+0.3582vw,1rem)] font-extralight text-center md:text-left">
            bersejarah & modern
          </span>
        </div>

        {/* JUMLAH NEGARA */}
        <div className=" flex flex-col -space-y-2 md:-space-y-4 justify-center items-center">
          <div className="flex items-baseline gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-[clamp(1rem,0.7313rem+1.194vw,2rem)] w-auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9e9e9e"
                d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.677 8.677 0 0 1 4.925.452l.204.081a7.999 7.999 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.677 8.677 0 0 1-5.327-.361a8.676 8.676 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
              />
            </svg>
            <h1 className=" text-[clamp(2rem,1.597rem+1.791vw,3.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {<FramerCounter to={dataMilestone.negara} />}
              <span className="ml-1 text-[clamp(0.9rem,0.6582rem+1.0746vw,1.8rem)] text-gray-500">
                Negara
              </span>
            </h1>
          </div>
          <span className="text-[clamp(0.7rem,0.6194rem+0.3582vw,1rem)] font-extralight text-center md:text-left">
            eksotis terjelajahi
          </span>
        </div>
      </div>
    </div>
  );
}

export default Milestone;
