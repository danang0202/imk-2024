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
import GisModal from "../../components/gis-page/GisModal";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import NormalFilter from "../../components/table/NormalFilter";
import AllFilterBadge from "../../components/table/AllFilterBadge";
import { handleDeleteAllFilter } from "../../helper/filter-umkm.helper";
import SearchBar from "../../components/table/SearchBar";

const Gis: React.FC = () => {
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
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [delayAdvancedFilter, setDelayAdvancedFilter] = useState(false);
  const [delayFilter, setDelayFilter] = useState(false);

  useEffect(() => {
    if (!(windowWidth < EXTENDED_WINDOW.xl)) {
      setShowFilter(true);
      setDelayFilter(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (showAdvancedFilter) {
      setDelayFilter(false);
      setTimeout(() => setDelayAdvancedFilter(true), 300);
    } else {
      setDelayAdvancedFilter(false);
      if (showFilter) {
        setTimeout(() => setDelayFilter(true), 300);
      }
    }
  }, [showAdvancedFilter, showFilter]);
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

  return (
    <Layout pageTitle="GIS">
      <div className="px-4 xl:hidden pt-5xl w-full bg-white xl:bg-silver dark:bg-black">
        <Breadcrumb />
      </div>
      <div className="xl:pt-5.5xl flex flex-row w-full items-stretch pb-0 xl:pb-8 bg-silver dark:bg-black min-h-[85vh] xl:gap-4 xl:px-8">
        <div className="bg-white rounded shadow-sm">
          <AnimatePresence>
            {delayAdvancedFilter && (
              <AdvancedFilter
                skalaUsahaFilter={skalaUsahaFilter}
                setSkalaUsahaFilter={setSkalaUsahaFilter}
                dinasPengampuFilter={dinasPengampuFilter}
                setDinasPengampuFilter={setDinasPengampuFilter}
                badanHukumFilter={badanHukumFilter}
                setBadanHukumFilter={setBadanHukumFilter}
                bidangUsahaFilter={bidangUsahaFilter}
                setBidangUsahaFilter={setBidangUsahaFilter}
                showAdvancedFilter={showAdvancedFilter}
                setShowAdvancedFilter={setShowAdvancedFilter}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {delayFilter && !delayAdvancedFilter && (
              <NormalFilter
                skalaUsahaFilter={skalaUsahaFilter}
                setSkalaUsahaFilter={setSkalaUsahaFilter}
                dinasPengampuFilter={dinasPengampuFilter}
                setDinasPengampuFilter={setDinasPengampuFilter}
                badanHukumFilter={badanHukumFilter}
                setBadanHukumFilter={setBadanHukumFilter}
                bidangUsahaFilter={bidangUsahaFilter}
                setBidangUsahaFilter={setBidangUsahaFilter}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                setDelayFilter={setDelayFilter}
                setShowAdvancedFilter={setShowAdvancedFilter}
                selectedKecamatan={selectedKecamatan}
                setSelectedkecamatan={setSelectedKecamatan}
                kecamatanList={kecamatanList}
              />
            )}
          </AnimatePresence>
        </div>

        <motion.div
          transition={{ duration: 0.5 }}
          className="w-full rounded-lg px-0 p-4 lg:p-8 pb-8 shadow-sm bg-white dark:bg-black h-full relative"
        >
          <div className="flex flex-col xl:flex-row justify-between items-center pb-2 gap-4 xl:gap-0">
            <p className="text-sm md:text-base lg:text-lg font-bold text-black dark:text-white">
              Sistem Informasi Geografis UMKM Kulon Progo
            </p>
            <SearchBar
              width={windowWidth < EXTENDED_WINDOW.md ? "14rem" : "20rem"}
              searchColumn={searchColumn}
              setSearchColumn={setSearchColumn}
              keyword={keyword}
              setKeyword={setKeyword}
              data={filteredDataByKec}
            />
          </div>
          <div className="px-4 lg:px-0 xl:hidden w-full flex flex-row gap-2 text-grey hover:text-black dark:text-white dark:hover:text-grey justify-start cursor-pointer py-2">
            <IconFilterSearch size={17} />
            <p
              onClick={() => setShowFilter(true)}
              className="text-xs md:text-sm "
            >
              Buka Filter
            </p>
          </div>
          <div className="px-4 lg:px-0  filter-box flex flex-wrap py-2 gap-2 lg:gap-4">
            <AllFilterBadge
              keyword={keyword}
              setKeyword={setKeyword}
              skalaUsahaFilter={skalaUsahaFilter}
              setSkalaUsahaFilter={setSkalaUsahaFilter}
              dinasPengampuFilter={dinasPengampuFilter}
              setDinasPengampuFilter={setDinasPengampuFilter}
              badanHukumFilter={badanHukumFilter}
              setBadanHukumFilter={setBadanHukumFilter}
              bidangUsahaFilter={bidangUsahaFilter}
              setBidangUsahaFilter={setBidangUsahaFilter}
              showClearBadge={filteredDataUMKM.length != data.length}
              selectedKecamatan={selectedKecamatan}
              setSelectedKecamatan={setSelectedKecamatan}
            />
          </div>
          {filteredDataUMKM.length != filteredDataByKec.length && (
            <div className="px-4 lg:px-0 pb-4">
              <p className="text-grey text-xs lg:text-sm dark:text-white">
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

            {filteredDataUMKM.length === 1 && filteredDataUMKM[0].position && (
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
                  className="box p-2 xl:p-4 flex flex-row gap-2 items-center bg-white dark:bg-black border border-gray-300 hover:bg-silver  dark:hover:bg-gray-700 cursor-pointer transition duration-300"
                  onClick={() => {
                    () => {
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
                      );
                    };
                    setKeyword(item.name);
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-full max-w-6 xl:max-w-10 dark:bg-white"
                  />
                  <div className="flex flex-col gap-2 dark:text-white">
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
        </motion.div>
      </div>
    </Layout>
  );
};

export default Gis;
