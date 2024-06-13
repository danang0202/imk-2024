import { FC, SetStateAction } from "react";
import { TypeData } from "./Selection";
import {
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import { useThemeContext } from "../../layout/ThemeContext";
import NormalFilterBadge from "../commons/NormalFilterBadge";
import {
  handleClearKeyword,
  handleDeleteAllFilter,
  handleDeleteFilter,
} from "../../helper/filter-umkm.helper";
import BadgeFilter from "../commons/BadgeFilter";
import ClearBadge from "../commons/ClearBadge";
import { KecamatanGisType, kecamatanList } from "../../utils/gis-utils";

interface AllFilterBadgeProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  skalaUsahaFilter: TypeData[];
  setSkalaUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  dinasPengampuFilter: TypeData[];
  setDinasPengampuFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  badanHukumFilter: TypeData[];
  setBadanHukumFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  bidangUsahaFilter: TypeData[];
  setBidangUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  showClearBadge: boolean;
  selectedKecamatan?: KecamatanGisType | null;
  setSelectedKecamatan?: React.Dispatch<
    SetStateAction<KecamatanGisType | null>
  >;
}
const AllFilterBadge: FC<AllFilterBadgeProps> = ({
  keyword,
  setKeyword,
  skalaUsahaFilter,
  setSkalaUsahaFilter,
  dinasPengampuFilter,
  setDinasPengampuFilter,
  badanHukumFilter,
  setBadanHukumFilter,
  bidangUsahaFilter,
  setBidangUsahaFilter,
  showClearBadge,
  selectedKecamatan,
  setSelectedKecamatan,
}) => {
  const { common: c } = useThemeContext();

  return (
    <div className="bg-white badge-filter pb-2 flex flex-grow flex-wrap gap-2 lg:gap-4 dark:bg-black">
      {keyword && (
        <NormalFilterBadge
          text={`${c("keyword")}: ${keyword}`}
          handleClick={() => handleClearKeyword(setKeyword)}
        />
      )}
      {selectedKecamatan && setSelectedKecamatan && (
        <NormalFilterBadge
          text={selectedKecamatan.name}
          handleClick={() => setSelectedKecamatan(null)}
        />
      )}
      {skalaUsahaFilter.length != skalaUsaha.length &&
        skalaUsahaFilter.map((item, index) => (
          <BadgeFilter
            item={item}
            handleClick={() =>
              handleDeleteFilter(
                item,
                skalaUsahaFilter,
                setSkalaUsahaFilter,
                skalaUsaha
              )
            }
            key={index}
          />
        ))}
      {badanHukumFilter &&
        badanHukumFilter.length != badanHukumUsaha.length &&
        badanHukumFilter.map((item, index) => (
          <BadgeFilter
            item={item}
            handleClick={() =>
              handleDeleteFilter(
                item,
                badanHukumFilter,
                setBadanHukumFilter,
                badanHukumUsaha
              )
            }
            key={index}
          />
        ))}
      {dinasPengampuFilter.length != dinasPengampu.length &&
        dinasPengampuFilter.map((item, index) => (
          <BadgeFilter
            item={item}
            handleClick={() =>
              handleDeleteFilter(
                item,
                dinasPengampuFilter,
                setDinasPengampuFilter,
                dinasPengampu
              )
            }
            key={index}
          />
        ))}
      {bidangUsahaFilter.length != bidangUsaha.length &&
        bidangUsahaFilter.map((item, index) => (
          <BadgeFilter
            item={item}
            handleClick={() =>
              handleDeleteFilter(
                item,
                bidangUsahaFilter,
                setBidangUsahaFilter,
                bidangUsaha
              )
            }
            key={index}
          />
        ))}
      {showClearBadge && (
        <ClearBadge
          handleClick={() =>
            handleDeleteAllFilter(
              setKeyword,
              setDinasPengampuFilter,
              setSkalaUsahaFilter,
              setBadanHukumFilter,
              setBidangUsahaFilter,
              dinasPengampu,
              skalaUsaha,
              badanHukumUsaha,
              bidangUsaha,
              setSelectedKecamatan,
              kecamatanList
            )
          }
        />
      )}
    </div>
  );
};

export default AllFilterBadge;
