import { TypeData } from "../components/table/Selection";
import { productType } from "../types/common.types";
import { FilterProduct } from "../types/geleri-produk.types";

export const updateKeywordFilterProduct = (setFilter: React.Dispatch<React.SetStateAction<FilterProduct>>, newKeyword: string) => {
    setFilter((prevFilter: FilterProduct) => ({
        ...prevFilter,
        keyword: newKeyword,
    }));
};


export const updateSortedColumnFilterProduct = (
    setFilter: React.Dispatch<React.SetStateAction<FilterProduct>>,
    newSortedColumn: string
) => {
    setFilter((prevFilter) => ({
        ...prevFilter,
        sortedColumn: newSortedColumn,
    }));
};

export const updateSortOrderFilterProduct = (
    setFilter: React.Dispatch<React.SetStateAction<FilterProduct>>,
    newSortOrder: string
) => {
    setFilter((prevFilter) => ({
        ...prevFilter,
        sortOrder: newSortOrder,
    }));
};

export const handleFilterProductToggle = (
    item: TypeData,
    filterData: TypeData[],
    setFilterData: (data: TypeData[]) => void
) => {
    const updatedFilterData = filterData.some((filterItem) => filterItem.slug === item.slug)
        ? filterData.filter((filterItem) => filterItem.slug !== item.slug)
        : [...filterData, item];

    setFilterData(updatedFilterData);
};

export const handleClickAllFilterProductPerGroup = (
    data: TypeData[],
    setFilter: (data: (prevState: FilterProduct) => FilterProduct) => void,
    slug: string
) => {
    setFilter((prevState) => {
        if (slug === 'kategori') {
            return { ...prevState, kategori: data };
        } else if (slug === 'kecamatan') {
            return { ...prevState, kecamatan: data };
        }
        return prevState;
    });
};

export const handleClearFilterProductPerGroup = (
    setFilter: (data: (prevState: FilterProduct) => FilterProduct) => void,
    slug: string
) => {
    setFilter((prevState) => {
        if (slug === 'kategori') {
            return { ...prevState, kategori: [] };
        } else if (slug === 'kecamatan') {
            return { ...prevState, kecamatan: [] };
        }
        return prevState;
    });
};

export const filterProducts = (
    products: productType[],
    filter: FilterProduct
): productType[] => {
    return products
        .filter((product) => {
            // Filter berdasarkan kategori
            const kategoriMatch = filter.kategori.some(
                (kategori) => kategori.name === product.kategori
            );

            // Filter berdasarkan kecamatan
            const kecamatanMatch = filter.kecamatan.some(
                (kecamatan) => kecamatan.name === product.lokasi
            );

            // Filter berdasarkan keyword
            const keywordMatch =
                product.nama.toLowerCase().includes(filter.keyword.toLowerCase()) ||
                product.umkm.toLowerCase().includes(filter.keyword.toLowerCase());

            return kategoriMatch && kecamatanMatch && keywordMatch;
        })
        .filter((product) => {
            // Filter berdasarkan harga
            const [nominalLower, nominalUpper] = filter.harga;
            const hargaMatch = product.harga >= nominalLower && product.harga <= nominalUpper;
            return hargaMatch;
        })
        .sort((a, b) => {
            const columnA = a[filter.sortedColumn as keyof productType];
            const columnB = b[filter.sortedColumn as keyof productType];

            if (filter.sortOrder === "asc") {
                if (columnA < columnB) return -1;
                if (columnA > columnB) return 1;
            } else {
                if (columnA > columnB) return -1;
                if (columnA < columnB) return 1;
            }

            return 0;
        });
};
