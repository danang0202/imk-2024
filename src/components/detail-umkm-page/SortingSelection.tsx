import { IconSortAscending } from "@tabler/icons-react";

const SortingSelection = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:border-secondary  block w-full px-2.5 py-2 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
        >
          <option value="US">Nama</option>
          <option value="CA">Harga</option>
          <option value="CA">Likr</option>
        </select>
      </form>
      <IconSortAscending className="text-grey dark:text-white" />
    </div>
  );
};

export default SortingSelection;
