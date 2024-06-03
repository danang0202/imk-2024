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
      <div className="w-screen p-8 pt-6xl pb-8 bg-white min-h-[85vh] flex flex ">
        <div className="box px-8  py-1 flex flex-row items-start gap-4 w-full">
          <div className="min-w-[22rem] rounded p-8 shadow-sm bg-white border border-gray-300">
            <h2 className="font-bold text-lg text-center pb-4 border-b-2 mb-4  border-grey">
              Penyaringan Data
            </h2>
            <div className="box flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <IconFilterSearch size={20} />
                <h1 className="font-semibold whitespace-nowrap">Kecamatan</h1>
              </div>
              <form className="">
                <select
                  value={selectedKecamatan ? selectedKecamatan.name : ""}
                  onChange={handleKecamatanChange}
                  className="whitespace-nowrap bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer dark:bg-slate-800 dark:border-grey dark:text-white"
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
          <div className="w-full rounded px-8 pb-8 bg-white h-full rounded transform -translate-y-4 relative">
            <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-lg font-bold text-black">
                Sistem Informasi Geografis UMKM Kulon Progo
              </p>
              <SearchBar
                width="20rem"
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
                data={filteredDataByKec}
              />
            </div>
            {filteredDataUMKM.length != filteredDataByKec.length && (
              <div className="pb-4">
                <p className="text-grey text-sm">
                  Hasil:
                  <span className="font-medium"> {filterDataUMKM.length} </span>
                  UMKM ditemukan{" "}
                </p>
              </div>
            )}
            <div className="filter-box  flex flex-wrap pb-5">
              {keyword && (
                <CSSTransition
                  in={true}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <span
                    id="badge-dismiss-default"
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-grey bg-silver rounded-sm"
                  >
                    Kata kunci: {keyword}
                    <button
                      type="button"
                      className="inline-flex items-center p-1 ms-2 text-sm text-grey bg-transparent rounded-sm hover:text-white hover:bg-grey transition duration-300 "
                      data-dismiss-target="#badge-dismiss-default"
                      aria-label="Remove"
                      onClick={() => setKeyword("")}
                    >
                      <svg
                        className="w-2 h-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Remove badge</span>
                    </button>
                  </span>
                </CSSTransition>
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
              className="absolute top-40 right-10 z-10 flex flex-col gap-2 max-h-[40rem] overflow-y-scroll  p-4"
              data-aos="fade-up"
            >
              {filteredDataUMKM?.length != data.length &&
                filteredDataUMKM.length != 1 &&
                filteredDataUMKM.map((item) => (
                  <div
                    className="box p-4 flex flex-row gap-2 items-center bg-white border border-gray-300 hover:bg-silver cursor-pointer transition duration-300"
                    onClick={() => {
                      handleDeleteAllFilter();
                      setKeyword(item.name);
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="rounded-full max-w-10 "
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">{item.name}</p>
                      <div className="flex flex-row gap-2">
                        <span
                          className={`${
                            getBadanUsahaColor(item?.badanHukum).bg
                          } ${
                            getBadanUsahaColor(item?.badanHukum).text
                          } text-xs px-1  rounded-sm`}
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
