import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Layout from "../../components/Layout";
import { LatLngExpression, LatLngTuple } from "leaflet";
import MapUpdater from "../../components/gis-page/MapUpdater";
import { boundaries } from "../../components/statistik-page/GeoJson";
import { KecamatanGisType, kecamatanList } from "../../utils/gis-utils";
import { IconFilterSearch } from "@tabler/icons-react";
import {
  EXTENDED_WINDOW,
  UMKMProperties,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { TypeData } from "../../components/table/Selection";
import {
  filterDataUMKM,
  getBadanUsahaColor,
  getSkalaUsahaColor,
} from "../../utils/utils";
import AdvancedFilter from "../../components/table/AdvancedFilter";
import BadgeFilter from "../../components/commons/BadgeFilter";
import SearchBar from "../../components/table/SearchBar";
import ClearBadge from "../../components/commons/ClearBadge";
import { CSSTransition } from "react-transition-group";
import GisModal from "../../components/gis-page/GisModal";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import { ChevronDown } from "lucide-react";
import NormalFilterBadge from "../../components/commons/NormalFilterBadge";

const Gis: React.FC = () => {
  // const [selectedUMKM, setSelectedUMKM] = useState<UMKMLocation | null>(null);
  const [selectedKecamatan, setSelectedKecamatan] =
    useState<KecamatanGisType | null>(null);

  const [skalaUsahaFilter, setSkalaUsahaFilter] =
    useState<TypeData[]>(skalaUsaha);
  const [dinasPengampuFilter, setDinasPengampuFilter] =
    useState<TypeData[]>(dinasPengampu);
  const [badanHukumFilter, setBadanHukumFilter] =
    useState<TypeData[]>(badanHukumUsaha);
  const [bidangUsahaFilter, setBidangUsahaFilter] =
    useState<TypeData[]>(bidangUsaha);
  const [keyword, setKeyword] = useState<string>("");
  const [searchColumn, setSearchColumn] = useState<string>("name");

  const data = umkmData.filter((item) => item.position);
  const [filteredDataByKec, setFilteredDataByKec] = useState<UMKMProperties[]>(
    umkmData.filter((item) => item.position)
  );
  const [filteredDataUMKM, setFilteredDataUMKM] = useState<UMKMProperties[]>(
    umkmData.filter((item) => item.position)
  );

  const { windowWidth } = useThemeContext();
  const [showFilter, setShowFilter] = useState<boolean>(true);

  useEffect(() => {
    if (windowWidth < EXTENDED_WINDOW.xl) {
      setShowFilter(false);
    }
  }, [windowWidth]);

  const handleKecamatanChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const kecamatan = kecamatanList.find((k) => k.name === event.target.value);
    if (kecamatan) {
      setSelectedKecamatan(kecamatan);
    } else {
      setSelectedKecamatan(null);
    }
  };

  useEffect(() => {
    if (selectedKecamatan) {
      setFilteredDataByKec(
        data.filter((item) => item.kecamatan == selectedKecamatan?.name)
      );
    } else {
      setFilteredDataByKec(data);
    }
  }, [selectedKecamatan]);

  useEffect(() => {
    setFilteredDataUMKM(
      filterDataUMKM(
        searchColumn,
        keyword,
        skalaUsahaFilter,
        dinasPengampuFilter,
        badanHukumFilter,
        bidangUsahaFilter,
        filteredDataByKec
      )
    );
  }, [
    searchColumn,
    keyword,
    skalaUsahaFilter,
    dinasPengampuFilter,
    badanHukumFilter,
    bidangUsahaFilter,
    filteredDataByKec,
  ]);

  const handleDeleteBidangUsahaFilter = (item: TypeData) => {
    if (bidangUsahaFilter.length == 1) {
      setBidangUsahaFilter(bidangUsaha);
    } else {
      setBidangUsahaFilter(
        bidangUsahaFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDeleteBadanHukumFilter = (item: TypeData) => {
    if (badanHukumFilter.length == 1) {
      setBadanHukumFilter(badanHukumUsaha);
    } else {
      setBadanHukumFilter(
        badanHukumFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDeleteSkalaUsahaFilter = (item: TypeData) => {
    if (skalaUsahaFilter.length == 1) {
      setSkalaUsahaFilter(skalaUsaha);
    } else {
      setSkalaUsahaFilter(
        skalaUsahaFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDinasPengampuFilter = (item: TypeData) => {
    if (dinasPengampuFilter.length == 1) {
      setDinasPengampuFilter(dinasPengampu);
    } else {
      setDinasPengampuFilter(
        dinasPengampuFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDeleteAllFilter = () => {
    setSelectedKecamatan(null);
    setKeyword("");
    setDinasPengampuFilter(dinasPengampu);
    setSkalaUsahaFilter(skalaUsaha);
    setBadanHukumFilter(badanHukumUsaha);
    setBidangUsahaFilter(bidangUsaha);
  };

  const handleDeleteSelectedKecamatan = () => {
    setSelectedKecamatan(null);
  };

  const handleDeleteKeyword = () => {
    setKeyword("");
  };

  // const createCustomIcon = (avatarUrl: string) => {
  //   return L.icon({
  //     iconUrl: avatarUrl,
  //     iconSize: [30, 30], // Sesuaikan ukuran ikon
  //     iconAnchor: [10, 20], // Sesuaikan posisi anchor ikon
  //     popupAnchor: [0, -40], // Sesuaikan posisi popup
  //     className: "rounded-full bg-white shadow border border-gray-300", // CSS class tambahan untuk styling
  //   });
  // };
  return (
    <Layout pageTitle="GIS">
      <div className="xl:hidden pt-5xl w-full bg-white">
        <Breadcrumb />
      </div>
      <div className="w-screen px-4 xl:p-8 pt-2 xl:pt-6xl pb-0 xl:pb-8 bg-white min-h-[85vh] flex ">
        <div className="box px-0 xl:px-8  py-1 flex flex-row items-start gap-4 w-full">
          <CSSTransition
            in={showFilter}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <>
              <div className="fixed top-28 xl:top-0 max-h-[85vh] xl:max-h-fit overflow-y-scroll xl:overflow-y-auto xl:relative z-30 min-w-[22rem] rounded p-8 shadow-sm bg-white border border-gray-300">
                <div className="relative text-xs md:text-sm lg:text-base">
                  <ChevronDown
                    className={`xl:hidden absolute w-7 h-7 p-1 bg-silver text-black transition-transform hover:bg-inactive rounded-full cursor-pointer top-0 right-0 translate-x-5 -translate-y-5 ${
                      showFilter ? "transform rotate-90" : ""
                    }`}
                    onClick={() => setShowFilter(false)}
                  />
                  <h2 className="text-base font-bold text-center pb-2 xl:pb-4 border-b-2 mb-4 border-grey">
                    Penyaringan Data
                  </h2>
                  <div className="box flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                      <IconFilterSearch
                        size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
                      />
                      <h1 className="font-semibold whitespace-nowrap">
                        Kecamatan
                      </h1>
                    </div>
                    <form className="">
                      <select
                        value={selectedKecamatan ? selectedKecamatan.name : ""}
                        onChange={handleKecamatanChange}
                        className="whitespace-nowrap bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer dark:bg-slate-800 dark:border-grey dark:text-white"
                      >
                        <option value="">Semua</option>
                        {kecamatanList.map((item, index) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                  <div className="">
                    <AdvancedFilter
                      skalaUsahaFilter={skalaUsahaFilter}
                      setSkalaUsahaFilter={setSkalaUsahaFilter}
                      dinasPengampuFilter={dinasPengampuFilter}
                      setDinasPengampuFilter={setDinasPengampuFilter}
                      badanHukumFilter={badanHukumFilter}
                      setBadanHukumFilter={setBadanHukumFilter}
                      bidangUsahaFilter={bidangUsahaFilter}
                      setBidangUsahaFilter={setBidangUsahaFilter}
                    />
                  </div>
                </div>
              </div>
            </>
          </CSSTransition>

          <div className="w-full rounded px-0 xl:px-8 pb-8 bg-white h-full transform -translate-y-4 relative">
            <div className="flex flex-col xl:flex-row justify-between items-center pb-2 gap-4 xl:gap-0">
              <p className="text-sm md:text-base  lg:text-lg font-bold text-black">
                Sistem Informasi Geografis UMKM Kulon Progo
              </p>
              <SearchBar
                width={windowWidth < EXTENDED_WINDOW.md ? "12.5rem" : "20rem"}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
                data={filteredDataByKec}
              />
            </div>
            <div className="xl:hidden w-full flex flex-row gap-2 text-grey hover:text-black justify-start cursor-pointer py-2">
              <IconFilterSearch size={17} />
              <p
                onClick={() => setShowFilter(true)}
                className="text-xs md:text-sm dark:text-white dark:hover:text-grey"
              >
                Buka Filter
              </p>
            </div>
            <div className="filter-box flex flex-wrap py-2 gap-2 lg:gap-4">
              {keyword && (
                <NormalFilterBadge
                  text={`Kata kunci: ${keyword}`}
                  handleClick={handleDeleteKeyword}
                />
              )}
              {selectedKecamatan && (
                <NormalFilterBadge
                  text={selectedKecamatan.name}
                  handleClick={handleDeleteSelectedKecamatan}
                />
              )}
              {skalaUsahaFilter.length != skalaUsaha.length &&
                skalaUsahaFilter.map((item) => (
                  <BadgeFilter
                    item={item}
                    handleClick={handleDeleteSkalaUsahaFilter}
                  />
                ))}
              {badanHukumFilter &&
                badanHukumFilter.length != badanHukumUsaha.length &&
                badanHukumFilter.map((item) => (
                  <BadgeFilter
                    item={item}
                    handleClick={handleDeleteBadanHukumFilter}
                  />
                ))}
              {dinasPengampuFilter.length != dinasPengampu.length &&
                dinasPengampuFilter.map((item) => (
                  <BadgeFilter
                    item={item}
                    handleClick={handleDinasPengampuFilter}
                  />
                ))}
              {bidangUsahaFilter.length != bidangUsaha.length &&
                bidangUsahaFilter.map((item) => (
                  <BadgeFilter
                    item={item}
                    handleClick={handleDeleteBidangUsahaFilter}
                  />
                ))}
              {filteredDataUMKM.length != data.length && (
                <ClearBadge handleClick={handleDeleteAllFilter} />
              )}
            </div>
            {filteredDataUMKM.length != filteredDataByKec.length && (
              <div className=" px-1 pb-4">
                <p className="text-grey text-xs lg:text-sm">
                  Hasil:
                  <span className="font-medium"> {filteredDataUMKM.length} </span>
                  UMKM ditemukan{" "}
                </p>
              </div>
            )}
            <MapContainer
              center={[-7.8503, 110.1598] as LatLngTuple} // Koordinat default Kulon Progo, DIY, Indonesia
              zoom={11.25}
              scrollWheelZoom={false}
              className="rounded border border-gray-300 w-100 min-h-[77vh]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapUpdater
                position={selectedKecamatan ? selectedKecamatan.position : null}
                filteredData={filteredDataUMKM}
              />

              {filteredDataUMKM &&
                filteredDataUMKM
                  .filter((item) => item.position != undefined)
                  .map((umkm) => (
                    <Marker
                      key={umkm.id}
                      position={umkm.position ? umkm.position : [0, 0]}
                      eventHandlers={
                        {
                          // click: () => handleMarkerClick(umkm),
                        }
                      }
                    >
                      <Popup>
                        <GisModal item={umkm} />
                      </Popup>{" "}
                    </Marker>
                  ))}

              {filteredDataUMKM.length === 1 &&
                filteredDataUMKM[0].position && (
                  <Marker
                    key={filteredDataUMKM[0].id}
                    position={filteredDataUMKM[0].position}
                    eventHandlers={{
                      add: (e) => {
                        e.target.openPopup();
                      },
                    }}
                  >
                    <Popup>
                      <GisModal item={filteredDataUMKM[0]} />
                    </Popup>
                  </Marker>
                )}
              {boundaries?.map((kecamatan) => {
                const coordinates = kecamatan.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );

                return (
                  <Polygon
                    pathOptions={{
                      fillOpacity: 0.0,
                      weight:
                        kecamatan.properties.name == selectedKecamatan?.name
                          ? 3
                          : 1,
                      opacity: 1,
                      color: selectedKecamatan
                        ? kecamatan.properties.name == selectedKecamatan.name
                          ? "blue"
                          : "gray"
                        : "blue",
                    }}
                    positions={coordinates as LatLngExpression[]}
                  />
                );
              })}
            </MapContainer>
            <div
              className="absolute top-56 md:top-56 xl:top-44 right-0 xl:right-10 z-10 flex flex-col gap-2 max-h-[38rem] lg:max-h-[60rem] xl:max-h-[38rem] overflow-y-scroll "
              data-aos="fade-up"
            >
              {filteredDataUMKM?.length != data.length &&
                filteredDataUMKM.length != 1 &&
                filteredDataUMKM.map((item) => (
                  <div
                    className="box p-2 xl:p-4 flex flex-row gap-2 items-center bg-white border border-gray-300 hover:bg-silver cursor-pointer transition duration-300"
                    onClick={() => {
                      handleDeleteAllFilter();
                      setKeyword(item.name);
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="rounded-full max-w-6 xl:max-w-10 "
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-xs md:text-sm xl:text-base">
                        {item.name}
                      </p>
                      <div className="flex flex-row gap-2">
                        <span
                          className={`${
                            getBadanUsahaColor(item?.badanHukum).bg
                          } ${
                            getBadanUsahaColor(item?.badanHukum).text
                          } text-xs px-1 rounded-sm`}
                        >
                          {item?.badanHukum}
                        </span>
                        <span
                          className={`${getSkalaUsahaColor(item?.skala).bg} ${
                            getSkalaUsahaColor(item?.skala).text
                          } text-xs px-1  rounded-sm`}
                        >
                          {item?.skala}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gis;
