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

interface ProductCardProps {
  item: productType;
  handleLike: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, handleLike }) => {
  
  return (
    <div className="pt-4 px-2 md:px-3 pb-3 bg-white dark:bg-black rounded-sm flex flex-col gap-1 w-40 md:w-48 xl:w-52 xl:hover:shadow-lg transition duration-300 text-black dark:text-white">
      <a href="/galeri-produk/detail">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex justify-center">
            <img
              src={`/logo-umkm/${item.gambar}`}
              className="w-28 md:w-32 lg:w-36"
              alt={item.nama}
            />
          </div>
          <p className="text-sm lg:text-base">{item.nama}</p>
          <p className="text-sm">
            Rp{" "}
            <span className="text-sm md:text-base lg:text-lg font-semibold">
              {item.harga}
            </span>
          </p>
          <div className="text-white flex justify-start text-xs lg:text-sm">
            <div className="box px-1 bg-secondary rounded-sm">
              <p>{item.kategori.toLowerCase()}</p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <IconMapPin size={15} className="text-black dark:text-white" />
            <p className="text-xs lg:text-sm">{item.lokasi}</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <IconBuildingStore size={14} className="text-black dark:text-white" />
            <p className="text-xs lg:text-sm">{item.umkm}</p>
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
