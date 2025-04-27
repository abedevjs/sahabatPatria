import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../ui/Header";
import GalleryGrid from "../ui/GalleryGrid";
import CarouselAbe from "../ui/CarouselAbe";
import Milestone from "../ui/Milestone";
import Partnership from "../ui/Partnership";
import dataDokumentasi from "../../public/docs/dataDokumentasi";
import dataTestimonial from "../../public/docs/dataTestimonial";
import PerlengkapanPreview from "../ui/PerlengkapanPreview";
import dataPerlengkapan from "../../public/docs/dataPerlengkapan";
import { dataIdentity, dataKantor } from "../../public/docs/dataIdentity";
import GalleryAccordion from "../ui/GalleryAccordion";
import dataZiarah from "../../public/docs/dataZiarah";
import dataMuthawwif from "../../public/docs/dataMuthawwif";
import MuthawwifPreview from "../ui/MuthawwifPreview";
import PaketPreview from "../ui/PaketPreview";
import AboutPreview from "../ui/AboutPreview";
import NavLinkSolo from "../ui/NavLinkSolo";
import AccordionAbe from "../ui/AccordionAbe";
import dataFaq from "../../public/docs/dataFaq";
import FramerReveal from "../ui/FramerReveal";
import SectionDivider from "../ui/SectionDivider";
import TopBar from "../ui/TopBar";
import dataPartnership from "../../public/docs/dataPartnership";
import Kantor from "../ui/Kantor";
import QoranVerse from "../ui/QoranVerse";
import SliderInfiniteLeft from "../ui/SliderInfiniteLeft";
import SliderInfiniteRight from "../ui/SliderInfiniteRight";

function HomePage() {
  const [currentSection, setCurrentSection] = useState("");
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  const ref = useRef();

  useEffect(() => {
    if (!currentSection) return;
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });

    return () => {
      setCurrentSection("");
    };
  }, [currentSection]);

  return (
    <div className=" w-full">
      <Header onClick={setCurrentSection} />

      {isMobileMode && <TopBar />}

      <QoranVerse />

      <SectionDivider title="" />
      <FramerReveal>
        <Milestone />
      </FramerReveal>

      <SectionDivider title="Ragam kegiatan Jama`ah..." />
      <GalleryGrid data={dataDokumentasi} />

      <SectionDivider title="...juga suka-cita mereka." />
      <FramerReveal>
        <CarouselAbe datas={dataTestimonial} />
      </FramerReveal>

      <SectionDivider title="Menggunakan fasilitas terbaik..." />
      <FramerReveal>
        {/* <Partnership data={dataPartnership} /> */}
        <SliderInfiniteRight data={dataPartnership} />
      </FramerReveal>

      <SectionDivider title="...dan perlengkapan eksklusif." />
      <FramerReveal>
        {/* <PerlengkapanPreview data={dataPerlengkapan} linkTitle="perlengkapan" /> */}
        <SliderInfiniteLeft data={dataPerlengkapan} />
      </FramerReveal>

      <SectionDivider title="Healing dan honeymoon disini..." />
      <FramerReveal>
        <GalleryAccordion datas={dataZiarah} />
      </FramerReveal>

      <SectionDivider title="...bersama Muthawwif berpengalaman." />
      <FramerReveal>
        <MuthawwifPreview data={dataMuthawwif} linkTitle="muthawwif" />
      </FramerReveal>

      <div ref={currentSection == "paket" ? ref : null}>
        <SectionDivider title="👑 Dengan pelayanan ala sultan 👑" />
        <PaketPreview />
      </div>

      <SectionDivider
        title={`Perkenalkan, kami ${dataIdentity.travelName}...`}
      />
      <FramerReveal>
        <AboutPreview />
        <div className=" flex justify-end">
          <NavLinkSolo text="Lebih jauh Tentang Kami" to="/about" />
        </div>
      </FramerReveal>

      <SectionDivider title={`...atau silaturahmi ke kantor kami.`} />
      <Kantor data={dataKantor} />

      <SectionDivider title={`Ustad, saya mau tanya...`} />
      <AccordionAbe data={dataFaq} />
    </div>
  );
}

export default HomePage;

// const userTesti = [
//   {
//     image: "https://picsum.photos/200/300",
//     text: "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
//     author: "KH. Muhammad Ashal",
//     status: "Pimpinan DDI Mangkoso",
//   },
//   {
//     image: "https://picsum.photos/200/300",
//     text: "Its a simple unit converter but I have no clue how to make it look really good. I cannot allocate more budget to this. Its kind of urgent. I will immediately jump into a call.",
//     author: "KH. Muhammad Ashal",
//     status: "Pimpinan DDI Mangkoso",
//   },
//   {
//     image: "https://picsum.photos/200/300",
//     text: "Looking for an expressjs developer to implement a few functions. Should be a quick job but you need experience in API integration",
//     author: "KH. Muhammad Ashal",
//     status: "Pimpinan DDI Mangkoso",
//   },
// ];
