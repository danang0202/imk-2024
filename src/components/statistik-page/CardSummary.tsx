import { TablerIcon } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  icon: TablerIcon;
  value: number;
  label: string;
}
const CardSummary: FC<Props> = ({ icon: Icon, value, label }) => {
  return (
    <div className="rounded shadow border border-gray-300 dark:border-gray-700 bg-white flex flex-row items-center gap-4 lg:gap-8 p-2 md:p-4 px-4 md:px-6 dark:bg-black">
      <div className="box p-2 md:p-4 bg-accent2a rounded-full">
        <Icon className="text-purpleDarkChart w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-xl md:text-2xl xl:text-3xl font-bold text-purpleDarkChart dark:text-white">
          {value}
        </p>
        <h2 className="text-xs md:text-sm lg:text-base font-semibold text-grey dark:text-white text-wrap whitespace-pre">
          {label}
        </h2>
      </div>
    </div>
  );
};

export default CardSummary;
