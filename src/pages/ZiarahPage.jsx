import dataZiarah from "../../public/docs/dataZiarah";
import GalleryFeatured from "../ui/GalleryFeatured";
import TitleDivider from "../ui/TitleDivider";

function ZiarahPage() {
  return (
    <div>
      <TitleDivider title="Lokasi Ziarah Bersejarah & Modern" />
      <div className="mb-8 space-y-16">
        {dataZiarah.map((item, index) => (
          <GalleryFeatured key={index} abe={item} />
        ))}
      </div>
    </div>
  );
}

export default ZiarahPage;
