import React from "react";
import {
  IconMapPin,
  IconBuildingStore,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import { productType } from "../../types/common.types";
import { dropdownItemVariants } from "../../helper/motion.helper";

interface ProductCardProps {
  item: productType;
  handleLike: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, handleLike }) => {
  return (
    <div className="pt-2 md:pt-3 px-2 md:px-3 pb-3 border border-gray-300 dark:border-gray-600 shadow bg-white dark:bg-black rounded-sm flex flex-col gap-1 w-40 md:w-48 xl:w-52 xl:hover:shadow-lg transition duration-300">
      <a href="/galeri-produk/detail">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex justify-center">
            <img
              src={`/logo-umkm/${item.gambar}`}
              className="w-full"
              alt={item.nama}
            />
          </div>
          <p className="text-sm lg:text-base font-semibold">{item.nama}</p>
          <p className="text-sm text-orange-600">
            Rp{" "}
            <span className="text-sm md:text-base lg:text-lg font-semibold">
              {item.harga}
            </span>
          </p>
          <div className="text-orange-600 flex justify-start text-xs lg:text-sm">
            <div className="box px-1 border border-orange-600 rounded-sm">
              <p>{item.kategori}</p>
            </div>
          </div>
          <div className="hidden xl:flex flex-row gap-1 items-center">
            <IconMapPin size={15} className="text-black dark:text-white" />
            <p className="text-xs lg:text-sm">{item.lokasi}</p>
          </div>
          <div className="hidden xl:flex flex-row gap-1 items-center">
            <IconBuildingStore size={14} className="text-black dark:text-white" />
            <p className="text-xs lg:text-sm" >{item.umkm}</p>
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
            <IconHeart size={15} className="text-black" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
