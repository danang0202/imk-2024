import {
  IconFileSpreadsheet,
  IconFileTypeCsv,
  IconFileTypeJpg,
  IconFileTypePng,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ButtonSpinner from "./ButtonSpinner";
import { handleNotifSuccess } from "../../utils/natif";
import { AnimatePresence, motion } from "framer-motion";
import { variantsFadeInOutFormBottom } from "../../helper/motion.helper";
import { handleDownloadExcel, handleDownloadPng } from "../../helper/common.helper";
import { UMKMProperties, umkmData } from "../../DataBuilder";
import Tooltip from '@mui/material/Tooltip';
import { useThemeContext } from "../../layout/ThemeContext";
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
interface Props {
  chartTitle: string;
  setShow: (column: boolean) => void;
  isData?: boolean;
  svgId?: string;
}

type FileType = {
  type: string;
  icon: JSX.Element;
};

const fileTypes: FileType[] = [
  { type: "png", icon: <IconFileTypePng size={17} /> },
  { type: "jpg", icon: <IconFileTypeJpg size={17} /> },
  { type: "excel", icon: <IconFileSpreadsheet size={17} /> },
  { type: "csv", icon: <IconFileTypeCsv size={17} /> },
];
const DownloadConfirmationModal: React.FC<Props> = ({
  setShow,
  chartTitle,
  isData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showMainContent, setShowMainContent] = useState(true);
  const { common: c } = useThemeContext();

  useEffect(() => {
    if (selectedType != "") {
      setStep(step == 1 ? 2 : step);
    }
  }, [selectedType]);

  useEffect(() => {
    if (email != "") {
      if (emailRegex.test(email)) {
        setStep(3);
      } else {
        setStep(2);
      }
    } else {
      if (step == 1) {
        return;
      }
      setStep(2);
    }
  }, [email]);

  const handleDownload = async (title: string, data: UMKMProperties[]) => {
    if (selectedType == 'excel' || selectedType == 'csv') {
      await handleDownloadExcel(title, data)
    } else {
      const id = "chloropath-map-svg";
      await handleDownloadPng(title, id)
    }
  }

  const handleDownloadButton = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 30);

    setTimeout(() => {
      setLoading(false);
      setShow(false);
      handleDownload(chartTitle, umkmData)
      handleNotifSuccess(
        "Download Berhasil",
        "Jika tidak berhasil, ulangi langkah !"
      );
    }, 3000);
  };



  return (
    <div>
      <div
        id="timeline-modal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden flex bg-black/25 fixed top-0 right-0 left-0 z-[100] justify-center items-center w-full md:inset-0 h-screen transition duration-500"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <AnimatePresence>
            {showMainContent && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variantsFadeInOutFormBottom}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-lg shadow dark:bg-gray-800"
              >
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {c("download")} {isData ? "Data" : c("chart")}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="timeline-modal"
                    disabled={loading}
                    onClick={() => {
                      setShowMainContent(false);
                      setTimeout(() => setShow(false), 500);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <time className="block mb-3 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 pb-2">
                    {chartTitle}
                  </time>
                  <ol className="relative border-s border-gray-200 dark:border-gray-600 ms-3.5 mb-4 md:mb-5">
                    <li className="mb-10 ms-8">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-primary">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h3 className="flex items-start mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                        {c("selectFileType")}
                      </h3>
                      <time className="block mb-3 text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
                        {c("choice")} : {!isData && "PNG, JPG,"} CSV (Data), {c("and")} Excel
                        (Data)
                      </time>

                      <div className="flex flex-row gap-4">
                        {!isData
                          ? fileTypes.map((file) => (
                            <Tooltip title={`${file.type}`} arrow>
                              <div
                                key={file.type}
                                className={`box p-1 rounded-sm ${selectedType === file.type
                                  ? "bg-primary text-white"
                                  : "text-black bg-silver hover:bg-grey hover:text-white"
                                  } cursor-pointer transition duration-300`}
                                onClick={() => setSelectedType(file.type)}
                              >
                                {file.icon}
                              </div>
                            </Tooltip>
                          ))
                          : fileTypes
                            .filter(
                              (file) =>
                                file.type != "jpg" && file.type != "png"
                            )
                            .map((file) => (
                              <>
                                <Tooltip title={`${file.type}`} arrow>
                                  <div
                                    key={file.type}
                                    className={`box p-1 rounded-sm ${selectedType === file.type
                                      ? "bg-primary text-white"
                                      : "text-black bg-silver hover:bg-grey hover:text-white"
                                      } cursor-pointer transition duration-300`}
                                    onClick={() => setSelectedType(file.type)}
                                  >
                                    {file.icon}
                                  </div>
                                </Tooltip>
                              </>
                            ))}
                      </div>
                    </li>
                    <li className="mb-10 ms-8">
                      <span
                        className={`absolute flex items-center justify-center w-6 h-6 ${step >= 2
                          ? "bg-primary dark:bg-primary"
                          : "bg-gray-100  dark:bg-gray-600"
                          } rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 ${step >= 2 ? "text-white" : "text-gray-500"
                            } `}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h3 className="mb-1 text-sm  font-semibold text-gray-900 dark:text-white">
                        {c("inputYourEmail")}
                      </h3>
                      <time className="block mb-3 text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
                        {c("emailLabel")}
                      </time>
                      {/*  inputan email */}
                      <div className="col-span-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className={`g-gray-50 border border-gray-300 text-gray-900 text-xs  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${step < 2 && "cursor-not-allowed"
                            }`}
                          placeholder="Email..."
                          required
                          disabled={step < 2}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </li>
                    <li className="ms-8">
                      <span
                        className={`absolute flex items-center justify-center w-6 h-6 ${step >= 3
                          ? "bg-primary dark:bg-primary"
                          : "bg-gray-100  dark:bg-gray-600"
                          } rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 `}
                      >
                        <svg
                          className={`w-2.5 h-2.5 ${step >= 3 ? "text-white" : "text-gray-500"
                            }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                        </svg>
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                        {c("pressDownload")}
                      </h3>
                      <time className="block mb-3 text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
                        {c("pressDownloadLabel")}
                      </time>
                    </li>
                  </ol>
                  {loading && (
                    <div className="w-full rounded-full mb-4 px-1 py-1">
                      <p className="text-xs pb-2">{c("preparing")} data ({progress}%)</p>
                      <div
                        className="h-1.5 rounded-full bg-info"
                        style={{
                          width: `${progress}%`,
                        }}
                      ></div>
                    </div>
                  )}
                  <button
                    className={`text-sm  text-white flex items-center gap-2 w-full justify-center bg-primary py-2 rounded  transition duration-300 ${step < 3 || loading
                      ? "bg-primary/50 cursor-not-allowed"
                      : "hover:bg-primary/75 cursor-pointer"
                      }`}
                    disabled={step < 3}
                    onClick={() => handleDownloadButton()}
                  >
                    {loading ? (
                      <ButtonSpinner />
                    ) : (
                      <svg
                        className="w-3 h-3 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                    )}
                    {c("download")}  {isData ? "Data" : c("chart")}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div >
  );
};

export default DownloadConfirmationModal;
