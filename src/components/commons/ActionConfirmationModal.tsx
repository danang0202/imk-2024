import React from "react";
import ButtonSpinner from "./ButtonSpinner";
import { useThemeContext } from "../../layout/ThemeContext";

interface ActionConfirmationModalProps {
  text: string;
  handleYes: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (column: boolean) => void;
  loading: boolean;
}

const ActionConfirmationModal: React.FC<ActionConfirmationModalProps> = ({
  text,
  handleYes,
  isModalOpen,
  setIsModalOpen,
  loading,
}) => {
  const { common: c } = useThemeContext();
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleYesClick = () => {
    handleYes();
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="fixed top-0 left-0 right-0 w-screen h-screen z-50 flex justify-center items-center bg-black/25"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div
              className="relative bg-white rounded shadow dark:bg-gray-700"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
                disabled={loading}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  {c(text)}
                </h3>
                <button
                  onClick={handleYesClick}
                  type="button"
                  disabled={loading}
                  className="cursor-pointer text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none font-medium rounded text-xs md:text-sm  inline-flex items-center px-3 py-1.5 text-center transition duration-300"
                >
                  {loading && <ButtonSpinner />}
                  {c("Ya, Saya Yakin")}
                </button>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  disabled={loading}
                  className={`py-1.5 px-3 ms-3 text-xs md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 ${loading
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-100 hover:text-primary dark:hover:text-white dark:hover:bg-gray-700"
                    } transition duration-300`}
                >
                  {c("Tidak, Batalkan")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionConfirmationModal;
