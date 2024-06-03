import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { UMKMProperties } from "../../DataBuilder";

type MapUpdaterProps = {
  position: LatLngTuple | undefined | null;
  filteredData: UMKMProperties[] | undefined;
};

const MapUpdater: React.FC<MapUpdaterProps> = ({ position, filteredData }) => {
  const map = useMap();
  const temp = filteredData?.filter((item) => item.position);

  useEffect(() => {
    if (temp && temp.length === 1 && temp[0].position) {
      map.setView(temp[0].position, 15);
    } else if (position) {
      map.setView(position, position ? 13 : 11.35);
    } else {
      map.setView([-7.8503, 110.1598], 11.35);
    }
  }, [position, filteredData, map]);

  return null;
};

export default MapUpdater;
