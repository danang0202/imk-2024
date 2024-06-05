import { IconBuildingStore } from "@tabler/icons-react";
const CardSummary = () => {
  return (
    <div className="rounded shadow-sm border border-gray-300 bg-white flex flex-row items-center gap-4 lg:gap-8 p-2 md:p-4 px-4 md:px-6 dark:bg-black">
      <div className="box p-2  md:p-4 bg-accent2a rounded-full">
        <IconBuildingStore className="text-accent2 w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-xl md:text-2xl  xl:text-3xl font-bold text-accent2 border-b-2 border-b-grey dark:text-white">
          20
        </p>
        <h2 className="text-xs md:text-sm lg:text-base font-semibold text-grey dark:text-white text-wrap whitespace-pre">
          Total UMKM
        </h2>
      </div>
    </div>
  );
};

export default CardSummary;
