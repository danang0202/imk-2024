import { Dispatch, FC, SetStateAction } from "react";
import { FilterProduct } from "../../types/geleri-produk.types"
import NormalFilterBadge from "../commons/NormalFilterBadge";
import { useThemeContext } from "../../layout/ThemeContext";
import { kategoriProduk, kecamatanSlug } from "../../DataBuilder";
import BadgeFilter from "../commons/BadgeFilter";
import ClearBadge from "../commons/ClearBadge";
import { formatRupiah } from "../../helper/info-modal.helper";

interface Props {
    filter: FilterProduct;
    setFilter: Dispatch<SetStateAction<FilterProduct>>
}
const AllFilterBadgeGaleriProduk: FC<Props> = ({ filter, setFilter }) => {
    const { common: c } = useThemeContext();
    return (
        <div className="my-4 flex flex-wrap gap-y-4">
            {filter.keyword && (
                <NormalFilterBadge
                    text={`${c("keyword")}: ${filter.keyword}`}
                    handleClick={() => setFilter((prev) => ({ ...prev, keyword: "" }))}
                    bg="bg-white"
                />
            )}

            {(filter.harga[0] !== 0 || filter.harga[1] !== 1000000) && (
                <NormalFilterBadge
                    text={`Harga: Rp ${formatRupiah(filter.harga[0])} - Rp ${formatRupiah(filter.harga[1])}`}
                    handleClick={() => setFilter((prev) => ({ ...prev, harga: [0, 1000000] }))}
                    bg="bg-white"
                />
            )}

            {filter.kategori.length !== kategoriProduk.length &&
                filter.kategori.map((item) => (
                    <BadgeFilter
                        key={item.slug}
                        item={item}
                        handleClick={() => setFilter((prev) => ({ ...prev, kategori: filter.kategori.filter((prevItem) => prevItem.slug != item.slug) }))
                        }
                        bg="bg-white"
                    />
                ))
            }
            {filter.kecamatan.length !== kecamatanSlug.length &&
                filter.kecamatan.map((item) => (
                    <BadgeFilter
                        key={item.slug}
                        item={item}
                        handleClick={() => setFilter((prev) => ({ ...prev, kecamatan: filter.kecamatan.filter((prevItem) => prevItem.slug != item.slug) }))
                        }
                        bg="bg-white"
                    />
                ))
            }

            {(filter.keyword || filter.kecamatan.length != kecamatanSlug.length || filter.kategori.length != kategoriProduk.length || filter.harga[0] !== 0 || filter.harga[1] !== 1000000) && (
                <ClearBadge
                    handleClick={() => setFilter({ kategori: kategoriProduk, kecamatan: kecamatanSlug, keyword: "", sortOrder: "desc", sortedColumn: "like", harga: [0, 1000000] })}
                    bg="bg-white"
                />
            )}
        </div>
    )
}

export default AllFilterBadgeGaleriProduk