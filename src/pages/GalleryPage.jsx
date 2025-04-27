import TitleDivider from "../ui/TitleDivider";
import dataDokumentasi from "../../public/docs/dataDokumentasi";
import GalleryMasonry from "../ui/GalleryMasonry";

function GalleryPage() {
  return (
    <div className="mb-8">
      <TitleDivider title="Dokumentasi Jama`ah" />
      <GalleryMasonry data={dataDokumentasi} />
    </div>
  );
}

export default GalleryPage;
