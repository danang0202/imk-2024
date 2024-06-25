import { IconDownload } from "@tabler/icons-react";
import { useState } from "react";
import DownloadConfirmationModal from "./DownloadConfirmationModal";

interface Props {
  chartTitle: string;
}

const DownloadChartButton: React.FC<Props> = ({ chartTitle }) => {
  const [showModalDownlaod, setShowModalDownlaod] = useState<boolean>(false);
  return (
    <>
      <div
        className="box bg-silver p-1 rounded text-black  hover:bg-inactive cursor-pointer transition duration-300"
        onClick={() => setShowModalDownlaod(true)}
      >
        <IconDownload className="w-6 h-5 text-purpleDarkChart" />
      </div>
      {showModalDownlaod && (
        <DownloadConfirmationModal
          setShow={setShowModalDownlaod}
          chartTitle={chartTitle}
        />
      )}
    </>
  );
};

export default DownloadChartButton;
