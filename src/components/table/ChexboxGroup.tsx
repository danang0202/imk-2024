import { nameSlugType } from "../../DataBuilder";

interface Props {
  data: nameSlugType[];
}

const ChexboxGroup: React.FC<Props> = ({ data }) => {
  return (
    <ul
      className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg"
      data-aos="zoom-in"
      data-aos-duration="300"
    >
      {data.map((item) => (
        <li className="w-full">
          <div className="flex items-center ps-3">
            <input
              id={`${item.name}-checkbox`}
              type="checkbox"
              value=""
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary cursor-pointer"
            />
            <label
              htmlFor={`${item.name}-checkbox`}
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap"
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
