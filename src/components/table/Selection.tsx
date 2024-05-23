interface typeData {
  name: string;
  slug: string;
}

interface Props {
  selectionData: typeData[];
}

const Selection: React.FC<Props> = ({ selectionData }) => {
  return (
    <form className="">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value="#">
          Semua
        </option>
        {selectionData.map((item) => (
          <option value={item.slug}>{item.name}</option>
        ))}
      </select>
    </form>
  );
};

export default Selection;
