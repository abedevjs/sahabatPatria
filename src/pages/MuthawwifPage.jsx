import dataMuthawwif from "../../public/docs/dataMuthawwif";
import MuthawwifDetail from "../ui/MuthawwifDetail";
import TitleDivider from "../ui/TitleDivider";

function MuthawwifPage() {
  return (
    <div className="mb-8">
      <TitleDivider title="Muthawwif Berpengalaman" />
      <MuthawwifDetail data={dataMuthawwif} />
    </div>
  );
}

export default MuthawwifPage;
