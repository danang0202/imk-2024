import { TypeData } from "./Selection";

interface Props {
  data: TypeData[];
  selectedData: TypeData[];
  setSelectedData: React.Dispatch<React.SetStateAction<TypeData[]>>;
}

const ChexboxGroup: React.FC<Props> = ({
  data,
  selectedData,
  setSelectedData,
}) => {
  const handleCheckboxChange = (item: TypeData) => {
    if (!selectedData.includes(item)) {
      setSelectedData([...selectedData, item]);
    } else {
      setSelectedData(
        selectedData.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  return (
    <ul
      className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-black"
      data-aos="zoom-in"
      data-aos-duration="300"
    >
      {data.map((item) => (
        <li className="w-full">
          <div className="flex items-center ps-1">
            <input
              id={`${item.name}-checkbox`}
              type="checkbox"
              value=""
              onClick={() => handleCheckboxChange(item)}
              checked={selectedData.includes(item)}
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary cursor-pointer"
            />
            <label
              htmlFor={`${item.name}-checkbox`}
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChexboxGroup;
