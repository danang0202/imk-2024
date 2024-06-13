import { productType } from "../types/common.types";
import { FilterDetailUMKM } from "../types/detail-umkm.types";

export const handleToggleLike = (
    id: number,
    setProduct: React.Dispatch<React.SetStateAction<productType[]>>
) => {
    setProduct((prevProducts) =>
        prevProducts.map((product) =>
            product.id === id
                ? {
                    ...product,
                    isLiked: !product.isLiked,
                    like: product.isLiked ? product.like - 1 : product.like + 1,
                }
                : product
        )
    );
};

// helper/detail-product.helper.ts
export const updateKeywordFilterDetailUMKM = (setFilter: React.Dispatch<React.SetStateAction<FilterDetailUMKM>>, newKeyword: string) => {
    setFilter((prevFilter: FilterDetailUMKM) => ({
        ...prevFilter,
        keyword: newKeyword,
    }));
};

export const updateSortedColumnFilterDetailUMKM = (
    setFilter: React.Dispatch<React.SetStateAction<FilterDetailUMKM>>,
    newSortedColumn: string
) => {
    setFilter((prevFilter) => ({
        ...prevFilter,
        sortedColumn: newSortedColumn,
    }));
};

export const updateSortOrderFilterDetailUMKM = (
    setFilter: React.Dispatch<React.SetStateAction<FilterDetailUMKM>>,
    newSortOrder: string
) => {
    setFilter((prevFilter) => ({
        ...prevFilter,
        sortOrder: newSortOrder,
    }));
};

export const filterAndSortProducts = (
    products: productType[],
    filter: FilterDetailUMKM
): productType[] => {
    const filteredProducts = products.filter((product) =>
        product.nama.toLowerCase().includes(filter.keyword.toLowerCase())
    );
    filteredProducts.sort((a, b) => {
        let comparison = 0;

        if (filter.sortedColumn === 'nama') {
            comparison = a.nama.localeCompare(b.nama);
        } else if (filter.sortedColumn === 'harga') {
            comparison = a.harga - b.harga;
        } else if (filter.sortedColumn === 'like') {
            comparison = a.like - b.like;
        }

        return filter.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filteredProducts;
};