import { Dispatch, FC, SetStateAction } from "react";
import { TypeData } from "../table/Selection";
import NormalFilterBadge from "../commons/NormalFilterBadge";
import {
  handleClearKeyword,
  handleDeleteFilter,
} from "../../helper/filter-umkm.helper";
import { useThemeContext } from "../../layout/ThemeContext";
import { institusionTypeData } from "../../static/InfoModalDataBuilder";
import BadgeFilter from "../commons/BadgeFilter";
import ClearBadge from "../commons/ClearBadge";
import { handleDeleteAllInfoModalFilter } from "../../helper/info-modal.helper";

interface AllFilterInfoModalProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  nominalFilter: number[];
  setNominalFilter: Dispatch<SetStateAction<number[]>>;
  institutionFilter: TypeData[];
  setInstitutionFilter: Dispatch<SetStateAction<TypeData[]>>;
}

const AllFilterInfoModal: FC<AllFilterInfoModalProps> = ({
  keyword,
  setKeyword,
  nominalFilter,
  setNominalFilter,
  institutionFilter,
  setInstitutionFilter,
}) => {
  const { common: c } = useThemeContext();
  const clearNominalFilter = () => {
    setNominalFilter([0, 10000]);
  };
  return (
    <div className="bg-white badge-filter pb-2 flex flex-grow flex-wrap gap-2 lg:gap-4 dark:bg-black">
      {keyword && (
        <NormalFilterBadge
          text={`${c("keyword")}: ${keyword}`}
          handleClick={() => handleClearKeyword(setKeyword)}
        />
      )}

      {(nominalFilter[0] !== 0 || nominalFilter[1] !== 10000) && (
        <NormalFilterBadge
          text={`Modal: ${nominalFilter[0]} - ${nominalFilter[1]} juta`}
          handleClick={clearNominalFilter}
        />
      )}
      {institutionFilter.length !== institusionTypeData.length &&
        institutionFilter.map((item) => (
          <BadgeFilter
            key={item.slug}
            item={item}
            handleClick={() =>
              handleDeleteFilter(
                item,
                institutionFilter,
                setInstitutionFilter,
                institusionTypeData
              )
            }
          />
        ))}
      {(keyword || nominalFilter[0] !== 0 || nominalFilter[1] !== 10000 || institutionFilter.length !== institusionTypeData.length) && (
        <ClearBadge
          handleClick={() => handleDeleteAllInfoModalFilter(setKeyword, setNominalFilter, setInstitutionFilter)}
        />
      )}
    </div>
  );
};

export default AllFilterInfoModal;
