import React from "react";

export interface TypeData {
  name: string;
  slug: string;
}

interface Props {
  selectionData: TypeData[];
  selectedData: TypeData[];
  setSelectedData: (data: TypeData[]) => void;
}

const Selection: React.FC<Props> = ({
  selectionData,
  selectedData,
  setSelectedData,
}) => {
  const handleChangeSelectionValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSlug = event.target.value;
    if (selectedSlug == "#") {
      setSelectedData(selectionData);
    } else {
      const selectedOption = selectionData.find(
        (item) => item.slug === selectedSlug
      );

      if (!selectedOption) {
        setSelectedData([]);
      } else {
        setSelectedData([selectedOption]);
      }
    }
  };

  return (
    <form className="">
      <select
        value={
          selectedData && selectedData.length == 1 ? selectedData[0].slug : ""
        }
        onChange={handleChangeSelectionValue}
        className="whitespace-nowrap bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm xl:text-base rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer dark:bg-slate-800 dark:border-grey dark:text-white"
      >
        <option value="#">Semua</option>
        {selectionData.map((item) => (
          <option key={item.slug} value={item.slug} className="text-xs md:text-sm xl:text-base">
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Selection;
