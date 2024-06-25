import { TablerIcon } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  icon: TablerIcon;
  value: number;
  label: string;
}
const CardSummary: FC<Props> = ({ icon: Icon, value, label }) => {
  return (
    <div className="rounded shadow border border-gray-300 dark:border-gray-700 bg-white flex flex-row items-center gap-4 p-2 md:p-4 dark:bg-black">
      <div className="box p-2 md:p-3 bg-accent2a rounded-full">
        <Icon className="text-purpleDarkChart w-6 h-6 md:w-7 md:h-7" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-xl md:text-2xl xl:text-2xl font-bold text-purpleDarkChart dark:text-white">
          {value}
        </p>
        <h2 className="text-xs md:text-sm font-semibold text-grey dark:text-white text-wrap whitespace-pre">
          {label}
        </h2>
      </div>
    </div>
  );
};

export default CardSummary;
