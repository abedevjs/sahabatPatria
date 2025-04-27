import { Typography } from "@material-tailwind/react";
import FramerReveal from "./FramerReveal";

function AccordionAbe({ title = "", data }) {
  return (
    <div className="max-w-4xl mb-6 px-2 md:px-0 mx-auto overflow-hidden space-y-2">
      {/* SubTitle */}
      {title && (
        <h2 className="text-3xl font-title capitalize sm:text-2xl">{title}</h2>
      )}
      {/* Tab 1 */}
      {data.map((el, i) => (
        <AccordionChild
          key={i}
          index={i}
          question={data[i].question}
          answer={data[i].answer}
        />
      ))}
    </div>
  );
}

function AccordionChild({ index, question, answer }) {
  return (
    <FramerReveal>
      <div className="py-1 outline-none group" tabIndex={index + 1}>
        {/* Tab Flex Container */}
        <div className="flex items-center justify-between p-2 px-6 bGLinearGradient group-focus:bg-[linear-gradient(to_bottom,rgba(217,4,41,0.8),rgba(239,35,60,0.8))] group-focus:text-white group-hover:bg-white rounded-xl transition duration-300 cursor-pointer group ease">
          {/* Tab Title */}
          {/* <div className="text-base sm:text-sm">{question}</div> */}
          <Typography className=" font-medium">{question}</Typography>
          {/* Icon Arrow SVG */}
          <div className="transition duration-300 ease group-focus:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="m7 10l5 5m0 0l5-5"
              />
            </svg>
          </div>
        </div>
        {/* Tab Inner Content */}
        <div className="overflow-hidden transition duration-300 group-focus:max-h-screen max-h-0 ease">
          {/* <p className="py-2 px-6 text-justify transition duration-300 text-sm italic sm:text-xs">
          {answer}
        </p> */}
          <Typography variant="small" className="py-2 px-6 text-justify">
            {answer}
          </Typography>
        </div>
      </div>
    </FramerReveal>
  );
}

export default AccordionAbe;
