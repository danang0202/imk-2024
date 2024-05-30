import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import ChexboxGroup from "./ChexboxGroup";
import {
  faChevronUp,
  faFilter,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { TypeData } from "./Selection";

interface AdvancedFilterProps {
  searchColumn: string;
  setSearchColumn: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
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
  searchColumn,
  setSearchColumn,
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
}) => {
  const [showAdvancedBidangFilter, setShowAdvancedFilter] =
    useState<boolean>(false);

  const [showAdvancedSkalaUsahaFilter, setAdvancedSkalaUsahaFilter] =
    useState<boolean>(false);
  const [showAdvancedBadanHukumFilter, setAdvancedBadanHukumFilter] =
    useState<boolean>(false);

  const [showAdvancedDinasPengampuFilter, setShowAdvancedDinasPengampuFilter] =
    useState<boolean>(false);

  return (
    <>
      <div className="">
        <div className="w-full border-b-2 border-grey py-4">
          <h1 className="font-bold text-xl text-center">
            {" "}
            <FontAwesomeIcon icon={faList} className="pr-3" /> Advanced Filter
          </h1>
        </div>
        <div className="box flex flex-col gap-4 py-4">
          <h1 className="font-semibold">Masukkan kata kunci</h1>
          <SearchBar
            width="15rem"
            searchColumn={searchColumn}
            setSearchColumn={setSearchColumn}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </div>
        {/* skala usaha filter */}
        <div className="box flex flex-col gap-2 py-2">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setAdvancedSkalaUsahaFilter(!showAdvancedSkalaUsahaFilter);
            }}
          >
            <FontAwesomeIcon icon={faFilter} />
            <h1 className="font-semibold">Skala Usaha</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey transform ${
                !showAdvancedSkalaUsahaFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedSkalaUsahaFilter && (
            <div className="box w-full">
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
        <div className="box flex flex-col gap-2 py-2">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setAdvancedBadanHukumFilter(!showAdvancedBadanHukumFilter);
            }}
          >
            <FontAwesomeIcon icon={faFilter} />
            <h1 className="font-semibold">Badan Hukum</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedBadanHukumFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedBadanHukumFilter && (
            <div className="box w-full">
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
        <div className="box flex flex-col gap-2 py-2">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedDinasPengampuFilter(
                !showAdvancedDinasPengampuFilter
              );
            }}
          >
            <FontAwesomeIcon icon={faFilter} />
            <h1 className="font-semibold">Dinas Pengampu</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedDinasPengampuFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedDinasPengampuFilter ? (
            <div className="box w-full">
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
        <div className="box flex flex-col gap-2 py-2">
          <div
            className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
            onClick={() => {
              setShowAdvancedFilter(!showAdvancedBidangFilter);
            }}
          >
            <FontAwesomeIcon icon={faFilter} />
            <h1 className="font-semibold">Bidang Usaha</h1>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`hover:text-grey cursor-pointer transform ${
                !showAdvancedBidangFilter && "rotate-180"
              }`}
            />
          </div>
          {showAdvancedBidangFilter ? (
            <div className="box w-full">
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
