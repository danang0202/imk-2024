import { IconBuildingStore } from "@tabler/icons-react";
const CardSummary = () => {
  return (
    <div className="rounded shadow-sm border border-gray-300 bg-white flex flex-row  items-center gap-8 p-4 px-6 dark:bg-black">
      <div className="box p-4 bg-accent2a rounded-full">
        <IconBuildingStore className="text-accent2 w-8 h-8"/>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-3xl font-bold text-accent2 border-b-2 border-b-grey dark:text-white">20</p>
        <h2 className="font-semibold text-grey dark:text-white">Jumlah semua umkm</h2>
      </div>
    </div>
  );
};

export default CardSummary;
