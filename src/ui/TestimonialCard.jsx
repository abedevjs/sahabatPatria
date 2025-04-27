import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import lozad from "lozad";
import { useMediaQuery } from "react-responsive";
import LazyImage from "../helper/LazyImage";

function StarIcon({ num = 3 }) {
  const ayo = Array.apply(null, Array(num)).map(Number.prototype.valueOf, 0); // [0, 0, 0, 0, 0]

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <>
      {ayo.map((res, index) => (
        <span key={index}>{star}</span>
      ))}
    </>
  );
}

function TestimonialCardSM({ data }) {
  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  return (
    <div
      // shadow={false}
      className=" h-[30rem] w-screen flex items-end  "
    >
      {/* IMAGE CONTENT */}
      <div
        className={`lozad absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-transparent`}
        style={{ backgroundImage: `url(${data?.image})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full  w-full bg-gradient-to-t from-black/80 via-black/50 " />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative px-4  pb-4">
        {/* <Typography color="white" className="mb-6 font-medium ">
          &quot; {data?.text} &quot;
        </Typography> */}
        <blockquote className="mb-6 font-normal text-gray-300 before:content-['\201C']  before:text-5xl before:text-gray-400 before:opacity-60">
          {data?.text}
        </blockquote>
        <Typography className=" text-gray-400">{data?.author}</Typography>
        <Typography variant="small" className=" text-gray-400 font-light">
          {data?.status}
        </Typography>
      </div>
    </div>
  );
}

// bg-[linear-gradient(to_bottom,rgba(252,4,80,0.6),rgba(244,162,11,0.6))]

function TestimonialCardLG({ data }) {
  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  // console.log(data);
  //max-w-[48rem]
  return (
    <div className=" h-full w-[47rem] lg:w-[64rem] rounded-md">
      <div className=" w-full bGLinearGradient md:max-h-80 text-white flex items-center  rounded-md ">
        {/* IMAGE CONTENT */}
        <div
          // shadow={false}
          // floated={false}
          className="ml-6 w-1/3 lg:w-[30%] shrink-0 rounded-md h-[22rem]"
        >
          <LazyImage
            src={data?.image}
            alt="card-image"
            className="lozad h-full w-full object-cover rounded-md"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className=" px-4  ">
          {/* <Typography className="mb-8 font-medium text-gray-900 ">
            &quot; {data?.text} &quot;
          </Typography> */}

          <blockquote className=" mb-8 font-normal text-gray-900  before:content-['\201C'] before:text-5xl before:text-gray-800 before:opacity-60 ">
            {data?.text}
          </blockquote>
          <Typography className=" text-gray-900 font-medium">
            {data?.author}
          </Typography>
          <Typography variant="small" className="text-gray-900 font-light">
            {data?.status}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ data }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const isTabletMode = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {isMobileMode ? (
        <TestimonialCardSM data={data} />
      ) : (
        <TestimonialCardLG data={data} />
      )}
    </>
  );
}

export default TestimonialCard;
