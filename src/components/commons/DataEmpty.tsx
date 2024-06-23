import { AnimatePresence, motion } from "framer-motion";
import { variantsBadgeFilter } from "../../helper/motion.helper";

const DataEmpty = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full flex justify-center items-center p-4 lg:p-8 "
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsBadgeFilter}
        transition={{ duration: 0.3 }}
      >
        <div className="box flex flex-col items-center">
          <img
            src="/image/empty.png"
            alt="Data Empty"
            className="w-[8rem] md:w-[18rem] xl:w-[20rem]"
          />
          <p className="text-grey text-xs md:text-sm lg:text-lg">
            Data tidak ditemukan. Mohon coba hapus beberapa filter.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataEmpty;
