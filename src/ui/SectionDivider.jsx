import FramerReveal from "./FramerReveal";

function SectionDivider({ title }) {
  return (
    <FramerReveal>
      <div
        className={`relative md:-z-[1] ${
          !title ? "mt-8" : "mt-40"
        } mb-10 w-full flex items-end gap-4  justify-center opacity-70`}
      >
        {!title ? (
          ""
        ) : (
          <>
            {/* <div className=" w-[15%] border-dashed border-t-2 border-gray-500"></div> */}
            {/* <div className="  py-1 px-2 w-max bg-gradient-to-r from-primary to-secondary rounded-sm">
            <p className=" text-xs text-dark font-semibold">
              {title.toUpperCase()}
            </p>
          </div> */}
            {/* Font size =  Minimum = 1.2rem@360px - Maximum = 2rem@2000px */}
            <p className=" text-[clamp(1.2rem,1.0244rem+0.7805vw,2rem)] text-center font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-primary to-primaryTint">
              {title}
            </p>
            {/* <div className=" w-[15%] border-dashed border-t-2 border-gray-500"></div> */}
          </>
        )}
      </div>
    </FramerReveal>
  );
}

export default SectionDivider;
