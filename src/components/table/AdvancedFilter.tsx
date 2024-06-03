import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import ChexboxGroup from "./ChexboxGroup";
import { faChevronUp, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TypeData } from "./Selection";
import { IconFilterSearch } from "@tabler/icons-react";

interface AdvancedFilterProps {
  skalaUsahaFilter: TypeData[];
  setSkalaUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  dinasPengampuFilter: TypeData[];
  setDinasPengampuFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  badanHukumFilter: TypeData[];
  setBadanHukumFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  bidangUsahaFilter: TypeData[];
  setBidangUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
}

const AdvancedFilter: React.FC<AdvancedFilterProps> = ({
  skalaUsahaFilter,
  setSkalaUsahaFilter,
  dinasPengampuFilter,
  setDinasPengampuFilter,
  badanHukumFilter,
  setBadanHukumFilter,
  bidangUsahaFilter,
  setBidangUsahaFilter,
}) => {
  const [showAdvancedBidangFilter, setShowAdvancedFilter] =
    useState<boolean>(false);

  const [showAdvancedSkalaUsahaFilter, setAdvancedSkalaUsahaFilter] =
    useState<boolean>(true);
  const [showAdvancedBadanHukumFilter, setAdvancedBadanHukumFilter] =
    useState<boolean>(true);

  const [showAdvancedDinasPengampuFilter, setShowAdvancedDinasPengampuFilter] =
    useState<boolean>(false);

  return (
    <>
      <div className="">
        <div
          className={`border-b-2 border-grey py-4 ${
            location.pathname == "/gis" && "hidden"
          }`}
        >
          <h1 className="font-bold text- text-center">
            {" "}
            <FontAwesomeIcon icon={faList} className="pr-3" /> Advanced Filter
          </h1>
        </div>
        {/* skala usaha filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4 mt-6">
          <div
            className="flex flex-row gap-4 items-center cursor-pointer hover:text-primary"
            onClick={() => {
              setAdvancedSkalaUsahaFilter(!showAdvancedSkalaUsahaFilter);
            }}
          >
            <IconFilterSearch size={20} />
            <h1 className="font-semibold whitespace-nowrap">Skala Usaha</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey transform ${
                !showAdvancedSkalaUsahaFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedSkalaUsahaFilter && (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setSkalaUsahaFilter(skalaUsaha)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-sm">|</p>
                <p
                  className="text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setSkalaUsahaFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={skalaUsaha}
                selectedData={skalaUsahaFilter}
                setSelectedData={setSkalaUsahaFilter}
              />
            </div>
          )}
        </div>
        {/* skala usaha filter end */}

        {/* badan hukum filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setAdvancedBadanHukumFilter(!showAdvancedBadanHukumFilter);
            }}
          >
            <IconFilterSearch size={20} />
            <h1 className="font-semibold whitespace-nowrap">Badan Hukum</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedBadanHukumFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedBadanHukumFilter && (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setBadanHukumFilter(badanHukumUsaha)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-sm">|</p>
                <p
                  className="text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setBadanHukumFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={badanHukumUsaha}
                selectedData={badanHukumFilter}
                setSelectedData={setBadanHukumFilter}
              />
            </div>
          )}
        </div>
        {/* badan hukum filter end */}

        {/* dinas pangampu filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedDinasPengampuFilter(
                !showAdvancedDinasPengampuFilter
              );
            }}
          >
            <IconFilterSearch size={20} />
            <h1 className="font-semibold whitespace-nowrap">Dinas Pengampu</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedDinasPengampuFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedDinasPengampuFilter ? (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setDinasPengampuFilter(dinasPengampu)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-sm">|</p>
                <p
                  className="text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setDinasPengampuFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={dinasPengampu}
                selectedData={dinasPengampuFilter}
                setSelectedData={setDinasPengampuFilter}
              />
            </div>
          ) : (
            <div className="box"></div>
          )}
        </div>
        {/* dinas pengampu end */}

        {/* bidang usaha filter */}
        <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedFilter(!showAdvancedBidangFilter);
            }}
          >
            <IconFilterSearch size={20} />
            <h1 className="font-semibold whitespace-nowrap">Bidang Usaha</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedBidangFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedBidangFilter ? (
            <div className="box w-full">
              <div className="flex flex-row justify-between py-1">
                <p
                  className="text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                  onClick={() => setBidangUsahaFilter(bidangUsaha)}
                >
                  Pilih semua
                </p>
                <p className="text-grey text-sm">|</p>
                <p
                  className="text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                  onClick={() => setBidangUsahaFilter([])}
                >
                  Bersihkan
                </p>
              </div>
              <ChexboxGroup
                data={bidangUsaha}
                selectedData={bidangUsahaFilter}
                setSelectedData={setBidangUsahaFilter}
              />
            </div>
          ) : (
            <div className="box"></div>
          )}
        </div>
        {/* bidang usadaha filter end */}
      </div>
    </>
  );
};

export default AdvancedFilter;
