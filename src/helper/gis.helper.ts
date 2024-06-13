import { KecamatanGisType, kecamatanList } from "../utils/gis-utils";

export const handleKecamatanChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setSelectedKecamatan: React.Dispatch<React.SetStateAction<KecamatanGisType | null>>
) => {
    const kecamatan = kecamatanList.find((k) => k.name === event.target.value);
    if (kecamatan) {
        setSelectedKecamatan(kecamatan);
    } else {
        setSelectedKecamatan(null);
    }
};