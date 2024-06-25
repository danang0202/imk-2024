import React from "react";
import {
  IconMapPin,
  IconBuildingStore,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import { dropdownItemVariants } from "../../helper/motion.helper";
import { productType } from "../../types/common.types";
import { useThemeContext } from "../../layout/ThemeContext";
import { Tooltip } from "@mui/material";

interface ProductCardProps {
  item: productType;
  handleLike: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, handleLike }) => {

  const { product: p, common: c } = useThemeContext();

  return (
    <div className="pt-2 px-2 pb-3 bg-white shadow-sm dark:bg-black rounded-sm flex flex-col gap-1 w-40 md:w-44 xl:w-44 xl:hover:shadow-lg transition duration-300 text-black dark:text-white">
      <a href="/galeri-produk/detail">
        <div className="w-full flex flex-col gap-1">
          <Tooltip title={c("Klik untuk Detail")} arrow>
            <div className="w-full flex justify-center">
              <img
                src={`/logo-umkm/${item.kategori.toLowerCase()}.png`}
                className="w-full max-h-36 object-cover"
                alt={item.nama}
              />
            </div>
          </Tooltip>
          <p className="text-sm font-semibold">{item.nama}</p>
          <p className="text-xs text-orange-600">
            Rp{" "}
            <span className="text-sm md:text-base font-semibold">
              {item.harga}
            </span>
          </p>
          <div className="text-orange-600 flex justify-start text-xs">
            <div className="box px-1 border border-orange-600 rounded-sm">
              <p>{p(item.kategori)}</p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <IconMapPin size={13} className="text-black dark:text-white" />
            <p className="text-xs">{item.lokasi}</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <IconBuildingStore size={13} className="text-black dark:text-white" />
            <p className="text-xs">{item.umkm}</p>
          </div>
        </div>
      </a>
      <div className="flex flex-row gap-1 items-center w-full justify-end">
        <p className="text-xs text-right">{item.like}</p>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={dropdownItemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
          onClick={() => handleLike(item.id)}
        >
          {item.isLiked ? (
            <IconHeartFilled size={15} color={EXTENDEDCOLORS.accent5} />
          ) : (
            <IconHeart size={15} className="text-dark" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
