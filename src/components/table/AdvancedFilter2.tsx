import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EXTENDED_WINDOW,
  kecamatanSlug,
  kategoriProduk,
} from "../../DataBuilder";
import ChexboxGroup from "./ChexboxGroup";
import { faChevronUp, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TypeData } from "./Selection";
import { IconFilterSearch } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";

interface AdvancedFilterProps {
  kecamatanFilter: TypeData[];
  setKecamatanFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  kategoriFilter: TypeData[];
  setKategoriFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
}

const AdvancedFilter2: React.FC<AdvancedFilterProps> = ({
  kecamatanFilter,
  setKecamatanFilter,
  kategoriFilter,
  setKategoriFilter,
}) => {
  const [showAdvancedKecamatanFilter, setShowAdvancedKecamatanFilter] =
    useState<boolean>(false);

  const [showAdvancedKategoriFilter, setShowAdvancedKategoriFilter] =
    useState<boolean>(false);

  const { windowWidth } = useThemeContext();

  return (
    <>
      <div className="text-xs md:text-sm lg:text-base ">
        <div
          className={`border-b-2 border-grey py-4 ${location.pathname == "/gis" && "hidden"
            }`}
        >
          <h1 className="font-bold text-sm lg:text-base text-center">
            {" "}
            <FontAwesomeIcon icon={faList} className="pr-3" /> Advanced Filter
          </h1>
        </div>
        {/* kecamatan filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedKecamatanFilter(!showAdvancedKecamatanFilter);
            }}
          >
            <IconFilterSearch
              size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
            />{" "}
            <h1 className="font-semibold whitespace-nowrap">Kecamatan</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${!showAdvancedKecamatanFilter && "rotate-180"
                }`}
            />
          </div>
          {showAdvancedKecamatanFilter ? (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setKecamatanFilter(kecamatanSlug)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-xs lg:text-sm">|</p>
                <p
                  className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setKecamatanFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={kecamatanSlug}
                selectedData={kecamatanFilter}
                setSelectedData={setKecamatanFilter}
              />
            </div>
          ) : (
            <div className="box"></div>
          )}

        </div>
        {/* kecamatan filter end */}

        {/* kategori filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedKategoriFilter(!showAdvancedKategoriFilter);
            }}
          >
            <IconFilterSearch
              size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
            />{" "}
            <h1 className="font-semibold whitespace-nowrap">Kategori</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${!showAdvancedKategoriFilter && "rotate-180"
                }`}
            />
          </div>
          {showAdvancedKategoriFilter ? (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setKategoriFilter(kategoriProduk)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-xs lg:text-sm">|</p>
                <p
                  className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setKategoriFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={kategoriProduk}
                selectedData={kategoriFilter}
                setSelectedData={setKategoriFilter}
              />
            </div>
          ) : (
            <div className="box"></div>
          )}
        </div>
        {/* kategori filter end */}

      </div>
    </>
  );
};

export default AdvancedFilter2;
