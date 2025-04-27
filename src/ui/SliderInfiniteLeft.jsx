import { useMediaQuery } from "react-responsive";
import LazyImage from "../helper/LazyImage";

function SliderInfiniteLeft({ data = [] }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });

  // let width = isMobileMode ? "150px" : "200px";
  let width = "200px";
  // let height = isMobileMode ? "150px" : "200px";
  let height = "200px";
  // `calc(30s /${data.length}  * (${data.length} - ${index + 1}) * -1)`
  return (
    <div
      style={{ height: `${height}` }}
      className={` max-w-[1700px] w-[90dvw] mx-auto relative overflow-hidden maskGradient`}
    >
      {data.map((item, index) => (
        <div
          style={{
            animationDelay: `calc(30s /${data.length}  * (${data.length} - ${
              index + 1
            }) * -1)`,
            height: `${height}`,
            width: `${width}`,
            left: `max(calc(${width} * ${data.length}), 100%)`,
          }}
          className={` p-2 absolute  rounded-md animate-[scrollLeft_30s_linear_infinite]`}
          key={index}
        >
          <LazyImage
            src={item.image}
            className="w-[90%] h-[90%] aspect-square block mx-auto"
            alt={`${item.name}-${index + 1}`}
          />
          <p className=" text-center text-gray-600 font-medium">{item.name}</p>
        </div>
        // <img
        // style={{
        //   animationDelay: `calc(30s /${data.length}  * (${data.length} - ${
        //     index + 1
        //   }) * -1)`,
        // }}
        //   key={index}
        //   loading="lazy"
        //   src={item.image}
        //   className={`w-[${width}] h-[${height}] aspect-square block left-full absolute bg-accent-300 rounded-md animate-[scrollLeft_30s_linear_infinite]`}
        //   alt={`${item.nama}-${index + 1}`}
        // />
      ))}
    </div>
  );
}

export default SliderInfiniteLeft;
