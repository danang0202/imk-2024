import { UMKMProperties, colorType, dataColumnUMKMBuilder } from "../DataBuilder";
import { TypeData } from "../components/table/Selection";

export const filterDataUMKM = (
    searchColumn: string,
    keyword: string,
    skalaUsaha: TypeData[],
    dinasPengampu: TypeData[],
    badanHukum: TypeData[],
    bidangUsaha: TypeData[],
    data: UMKMProperties[]
): UMKMProperties[] => {
    const keywordLower = keyword.toLowerCase();
    let filteredData = data;

    // Helper function to check if the item's property matches any of the selected filters
    const matchesFilter = (itemValue: string, filters: TypeData[]) =>
        filters.some((filter) => itemValue === filter.name);

    // Apply Skala Usaha filter if it's not empty
    filteredData = filteredData.filter((item) =>
        matchesFilter(item.skala, skalaUsaha)
    );

    // Apply Dinas Pengampu filter if it's not empty
    filteredData = filteredData.filter((item) =>
        matchesFilter(item.pengampu, dinasPengampu)
    );
    // Apply Badan Hukum filter if it's not empty
    filteredData = filteredData.filter((item) =>
        matchesFilter(item.badanHukum, badanHukum)
    );

    // Apply Bidang Usaha filter if it's not empt
    filteredData = filteredData.filter((item) =>
        matchesFilter(item.bidang, bidangUsaha)
    );

    if (keyword) {
        filteredData = filteredData.filter((item) => {
            if (searchColumn === 'all') {
                // If searchColumn is 'all', search across all columns except 'index'
                return dataColumnUMKMBuilder.some((column) => {
                    const itemValue = item[column.slug];
                    return column.slug === 'index'
                        ? itemValue.toString().includes(keyword)
                        : itemValue.toLowerCase().includes(keywordLower);
                });
            } else {
                // Otherwise, search in the specified column
                const itemValue = item[searchColumn];
                return searchColumn === 'index'
                    ? itemValue.toString().includes(keyword)
                    : itemValue.toLowerCase().includes(keywordLower);
            }
        });
    }
    return filteredData;
};

export const getSkalaUsahaColor = (skalaUsaha: string): colorType => {
    let text = "";
    let bg = "";
    if (skalaUsaha === 'Usaha Menengah') {
        text = "text-success";
        bg = "bg-accent4a";
    } else if (skalaUsaha === 'Usaha Kecil') {
        text = "text-accent2";
        bg = "bg-accent2a"
    } else {
        text = "text-accent3";
        bg = "bg-accent3a"
    }
    return {
        text,
        bg
    }
}

export const getBadanUsahaColor = (badanUsaha: string): colorType => {
    let text = "";
    let bg = "";
    if (badanUsaha === 'PT') {
        text = "text-accent5";
        bg = "bg-accent5a";
    } else if (badanUsaha === 'CV') {
        text = "text-accent2";
        bg = "bg-accent2a"
    } else if (badanUsaha == "Firma") {
        text = "text-success";
        bg = "bg-accent4a"
    } else {
        text = "text-blue-600"
        bg = "bg-blue-100"
    }
    return {
        text,
        bg
    }
}

