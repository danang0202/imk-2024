import React from "react";
import { UMKMProperties } from "../../DataBuilder";
import { IconBuildingBank, IconClick, IconMapPin } from "@tabler/icons-react";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";

interface Props {
  item: UMKMProperties;
}
const GisModal: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap">
      <div className="flex flex-row items-center gap-2 border-b border-gray-300">
        <img src={item.avatar} alt={item.name} className="w-12 rounded-full" />
        <p className="text-lg font-semibold">{item.name}</p>
      </div>
      <div className="pt-4">
        <div className="flex flex row gap-4 items-center">
          <span
            className={`${getBadanUsahaColor(item?.badanHukum).bg} ${
              getBadanUsahaColor(item?.badanHukum).text
            } text-xs px-2 py-1 text-semibold  rounded-sm`}
          >
            {item?.badanHukum}
          </span>
          <span
            className={`${getSkalaUsahaColor(item?.skala).bg} ${
              getSkalaUsahaColor(item?.skala).text
            } text-xs px-2 py-1 text-semibold rounded-sm`}
          >
            {item?.skala}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IconClick size={18} />
          <p className="mb-0 p-0">{item.bidang}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IconBuildingBank size={18} />
          <p className="mb-0 p-0">{item.pengampu}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IconMapPin size={18} />
          <p className="mb-0 p-0">{item.alamat}</p>
        </div>
      </div>
    </div>
  );
};

export default GisModal;
