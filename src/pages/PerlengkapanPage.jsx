import PerlengkapanDetail from "../ui/PerlengkapanDetail";
import TitleDivider from "../ui/TitleDivider";
import dataPerlengkapan from "../../public/docs/dataPerlengkapan";

function PerlengkapanPage() {
  return (
    <div className="mb-8">
      <TitleDivider title="Perlengkapan Eksklusif" />
      <PerlengkapanDetail data={dataPerlengkapan} />
    </div>
  );
}

export default PerlengkapanPage;
