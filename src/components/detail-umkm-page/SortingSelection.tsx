import { IconSortAscending, IconSortDescending } from "@tabler/icons-react";
import { titleSlugType } from "../../types/common.types";
import { FilterDetailUMKM } from "../../types/detail-umkm.types";
import { Dispatch, FC, SetStateAction } from "react";
import {
  updateSortOrderFilterDetailUMKM,
  updateSortedColumnFilterDetailUMKM,
} from "../../helper/detail-product.helper";
import { useThemeContext } from "../../layout/ThemeContext";
import { Tooltip } from "@mui/material";

const productSortingOption: titleSlugType[] = [
  {
    title: "Nama",
    slug: "nama",
  },
  {
    title: "Harga",
    slug: "harga",
  },
  { title: "Jumlah Like", slug: "like" },
];

interface SortingSelectionProps {
  filter: FilterDetailUMKM;
  setFilter: Dispatch<SetStateAction<FilterDetailUMKM>>;
}

const SortingSelection: FC<SortingSelectionProps> = ({ filter, setFilter }) => {
  const { common: c } = useThemeContext();
  return (
    <div className="flex flex-row items-center gap-2">
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:border-secondary  block w-full px-2 py-1.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white cursor-pointer"
          value={filter.sortedColumn}
          onChange={(e) => {
            updateSortedColumnFilterDetailUMKM(setFilter, e.target.value);
          }}
        >
          {productSortingOption.map((item, index) => (
            <option value={item.slug} key={index}>
              {c(item.title)}
            </option>
          ))}
        </select>
      </form>
      <div className="sort-order">
        {filter.sortOrder == "asc" ? (
          <Tooltip title="Ascending" arrow>
            <IconSortAscending
              className="text-grey dark:text-white"
              onClick={() => {
                updateSortOrderFilterDetailUMKM(setFilter, "desc");
              }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Descanding" arrow>
            <IconSortDescending
              className="text-grey dark:text-white"
              onClick={() => {
                updateSortOrderFilterDetailUMKM(setFilter, "asc");
              }}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default SortingSelection;
