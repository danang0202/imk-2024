import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardSummary = () => {
  return (
    <div className="shadow rounded bg-white flex flex-row  items-center gap-8 p-4 px-6">
      <div className="flex flex-col items-start justify-center">
        <p className="text-3xl font-bold text-accent2 border-b-2 border-b-grey">20</p>
        <h2 className="font-semibold text-grey">Jumlah semua umkm</h2>
      </div>
      <div className="box p-4 bg-accent2a rounded-full">
        <FontAwesomeIcon icon={faDatabase} className="w-8 h-8 text-accent2"/>
      </div>
    </div>
  );
};

export default CardSummary;
