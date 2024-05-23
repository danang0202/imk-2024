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

const AdvancedFilter = () => {
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
      <div className="w-full border-b-2 border-grey py-4">
        <h1 className="font-bold text-xl text-center">
          {" "}
          <FontAwesomeIcon icon={faList} className="pr-3" /> Advanced Filter
        </h1>
      </div>
      <div className="box flex flex-col gap-4 py-4">
        <h1 className="font-semibold">Masukkan kata kunci</h1>
        <SearchBar width="15rem" />
      </div>
      {/* skala usaha filter */}
      <div className="box flex flex-col gap-2 py-2">
        <div className="flex flex-row gap-4 items-center">
          <FontAwesomeIcon icon={faFilter} />
          <h1 className="font-semibold">Skala Usaha</h1>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`hover:text-grey cursor-pointer transform ${
              !showAdvancedSkalaUsahaFilter && "rotate-180"
            }`}
            onClick={() => {
              setAdvancedSkalaUsahaFilter(!showAdvancedSkalaUsahaFilter);
            }}
          />
        </div>
        {showAdvancedSkalaUsahaFilter && (
          <div className="box w-full">
            <ChexboxGroup data={skalaUsaha} />
          </div>
        )}
      </div>
      {/* skala usaha filter end */}

      {/* badan hukum filter */}
      <div className="box flex flex-col gap-2 py-2">
        <div className="flex flex-row gap-4 items-center ">
          <FontAwesomeIcon icon={faFilter} />
          <h1 className="font-semibold">Badan Hukum</h1>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`hover:text-grey cursor-pointer transform ${
              !showAdvancedBadanHukumFilter && "rotate-180"
            }`}
            onClick={() => {
              setAdvancedBadanHukumFilter(!showAdvancedBadanHukumFilter);
            }}
          />
        </div>
        {showAdvancedBadanHukumFilter && (
          <div className="box w-full">
            <ChexboxGroup data={badanHukumUsaha} />
          </div>
        )}
      </div>
      {/* badan hukum filter end */}

      {/* dinas pangampu filter */}
      <div className="box flex flex-col gap-2 py-2">
        <div className="flex flex-row gap-4 items-center">
          <FontAwesomeIcon icon={faFilter} />
          <h1 className="font-semibold">Dinas Pengampu</h1>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`hover:text-grey cursor-pointer transform ${
              !showAdvancedDinasPengampuFilter && "rotate-180"
            }`}
            onClick={() => {
              setShowAdvancedDinasPengampuFilter(
                !showAdvancedDinasPengampuFilter
              );
            }}
          />
        </div>
        {showAdvancedDinasPengampuFilter ? (
          <div className="box w-full">
            <ChexboxGroup data={dinasPengampu} />
          </div>
        ) : (
          <div className="box"></div>
        )}
      </div>
      {/* dinas pengampu end */}

      {/* bidang usaha filter */}
      <div className="box flex flex-col gap-2 py-2">
        <div className="flex flex-row gap-4 items-center">
          <FontAwesomeIcon icon={faFilter} />
          <h1 className="font-semibold">Bidang Usaha</h1>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`hover:text-grey cursor-pointer transform ${
              !showAdvancedBidangFilter && "rotate-180"
            }`}
            onClick={() => {
              setShowAdvancedFilter(!showAdvancedBidangFilter);
            }}
          />
        </div>
        {showAdvancedBidangFilter ? (
          <div className="box w-full">
            <ChexboxGroup data={bidangUsaha} />
          </div>
        ) : (
          <div className="box"></div>
        )}
      </div>
      {/* bidang usadaha filter end */}
    </>
  );
};

export default AdvancedFilter;
