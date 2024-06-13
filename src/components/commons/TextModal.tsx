interface Props {
  modalData:
    | {
        slug: string;
        title: string;
        desc: string;
      }
    | undefined;
  setShowModal: (column: string) => void;
}

const TextModal: React.FC<Props> = ({ modalData, setShowModal }) => {
  return (
    <div>
      {modalData && (
        <>
          <div
            id="static-modal"
            data-modal-backdrop="static"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden bg-black/25 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full"
          >
            <div
              className="relative p-4 w-full max-w-2xl max-h-full"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="relative bg-white rounded shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="xl:text-lg font-semibold text-black dark:text-white text-sm md:text-base">
                    {modalData.title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                    onClick={() => setShowModal("")}
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
                <div className="p-4 md:p-5 space-y-4 text-sm md:text-base dark:text-white">
                  <p dangerouslySetInnerHTML={{ __html: modalData.desc }} />
                </div>
                <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    className="py-1 px-2 ms-3 text-sm text-white  bg-accent5 rounded-sm hover:bg-gray-100 hover:text-black transition duration-300 focus:z-10   "
                    onClick={() => setShowModal("")}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TextModal;
