import { LatLngTuple } from "leaflet";

export type KecamatanGisType = {
    name: string;
    position: LatLngTuple;
};

export const kecamatanList: KecamatanGisType[] = [
    { name: "Wates", position: [-7.8859, 110.14075] },
    { name: "Pengasih", position: [-7.83011, 110.15572] },
    { name: "Sentolo", position: [-7.85558, 110.21879] },
    { name: "Kokap", position: [-7.82765, 110.09326] },
    { name: "Girimulyo", position: [-7.75026, 110.1612] },
    { name: "Nanggulan", position: [-7.7797, 110.20578] },
    { name: "Kalibawang", position: [-7.69004, 110.23706] },
    { name: "Samigaluh", position: [-7.68248, 110.17035] },
    { name: "Panjatan", position: [-7.91546, 110.15045] },
    { name: "Galur", position: [-7.95072, 110.2029] },
    { name: "Lendah", position: [-7.91239, 110.22927] },
    { name: "Temon", position: [-7.88896, 110.07009] }
];
