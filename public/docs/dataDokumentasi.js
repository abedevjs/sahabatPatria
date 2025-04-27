import shuffleArray from "../../src/helper/shuffleArray";

// const dataDokumentasiImage = [
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Madinah2SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Madinah2LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Madinah7SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Madinah7LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Madinah8SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Madinah8LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Madinah15SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Madinah15LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Madinah17SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Madinah17LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Makkah4SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Makkah4LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Makkah6SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Makkah6LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Makkah9SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Makkah9LG.jpg",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/Makkah20SM.jpg",
//     imageUrlLG: "/images/dokumentasi/Makkah20LG.jpg",
//   },
// ];

const dataDokumentasiImage = [
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/anangSM.png",
    imageUrlLG: "/images/dokumentasi/anangLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/artisSM.png",
    imageUrlLG: "/images/dokumentasi/artisLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/bclSM.png",
    imageUrlLG: "/images/dokumentasi/bclLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/bimbinganSM.png",
    imageUrlLG: "/images/dokumentasi/bimbinganLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/dindaSM.png",
    imageUrlLG: "/images/dokumentasi/dindaLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/grupSM.png",
    imageUrlLG: "/images/dokumentasi/grupLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/maiaSM.png",
    imageUrlLG: "/images/dokumentasi/maiaLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/tikoSM.png",
    imageUrlLG: "/images/dokumentasi/tikoLG.png",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/wheelchairSM.png",
    imageUrlLG: "/images/dokumentasi/wheelchairLG.png",
  },
];

// const dataDokumentasiVideo = [
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Berangkat14SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Berangkat14LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Madinah1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Madinah1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Madinah11SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Madinah11LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Makkah2SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Makkah2LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Makkah3SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Makkah3LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Makkah21SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Makkah21LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Makkah23SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Makkah23LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/Makkah28SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/Makkah28LG.mp4",
//   },
// ];

const dataDokumentasiVideo = [
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
  },
];

const dataDokumentasi = shuffleArray(
  dataDokumentasiImage.concat(dataDokumentasiVideo)
);

export default dataDokumentasi;
