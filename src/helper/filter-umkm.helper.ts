import { SetStateAction } from "react";
import { TypeData } from "../components/table/Selection";
import { KecamatanGisType } from "../utils/gis-utils";

export const handleDeleteFilter = (
    item: TypeData,
    filter: TypeData[],
    setFilter: (filter: TypeData[]) => void,
    fullList: TypeData[]
) => {
    if (filter.length === 1) {
        setFilter(fullList);
    } else {
        setFilter(filter.filter((selectedItem) => selectedItem !== item));
    }
};

export const handleClearKeyword = (setKeyword: (keyword: string) => void) => {
    setKeyword("");
};

export const handleDeleteAllFilter = (
    setKeyword: (keyword: string) => void,
    setDinasPengampuFilter: (filter: TypeData[]) => void,
    setSkalaUsahaFilter: (filter: TypeData[]) => void,
    setBadanHukumFilter: (filter: TypeData[]) => void,
    setBidangUsahaFilter: (filter: TypeData[]) => void,
    dinasPengampu: TypeData[],
    skalaUsaha: TypeData[],
    badanHukumUsaha: TypeData[],
    bidangUsaha: TypeData[],
    setSelectedKecamatan?: React.Dispatch<
        SetStateAction<KecamatanGisType | null>>,
    kecamatanList?: KecamatanGisType[]
) => {
    setKeyword("");
    setDinasPengampuFilter(dinasPengampu);
    setSkalaUsahaFilter(skalaUsaha);
    setBadanHukumFilter(badanHukumUsaha);
    setBidangUsahaFilter(bidangUsaha);
    if (setSelectedKecamatan && kecamatanList) {
        setSelectedKecamatan(null)
    }
};

