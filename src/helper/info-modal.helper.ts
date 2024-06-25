import { colorType } from "../DataBuilder";
import { TypeData } from "../components/table/Selection";
import { InfoModalType, columnTabelInfoModal, institusionTypeData } from "../static/InfoModalDataBuilder";

export const getInstitusionColorInfoModal = (institusionType: string): colorType => {

    let text = "";
    let bg = "";
    if (institusionType === 'PT') {
        text = "text-accent5";
        bg = "bg-accent5a";
    } else if (institusionType === 'CV') {
        text = "text-accent2";
        bg = "bg-accent2a"
    } else if (institusionType == "Firma") {
        text = "text-success";
        bg = "bg-accent4a"
    } else if (institusionType == "Pemerintah") {
        text = "text-gray-600"
        bg = "bg-gray-200"
    } else {
        text = "text-blue-600"
        bg = "bg-blue-100"
    }
    return {
        text,
        bg
    }
}

export const getNominalModalColor = (nominal: number) => {
    let text = "";
    let bg = "";

    if ((nominal / 1000000) > 1000) {
        text = "text-success";
        bg = "bg-accent4a"

    } else if ((nominal / 1000000) > 500) {
        text = "text-secondary";
        bg = "bg-accent3a"
    } else {
        text = "text-gray-600";
        bg = "bg-gray-200"
    }
    return {
        text,
        bg
    }

}

export const formatRupiah = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export function fetchDataInfoModalPagination(
    data: InfoModalType[],
    page: number,
    limit: number
) {
    const array: InfoModalType[] = [];
    for (let i = (page - 1) * limit; i < page * limit && i < data.length; i++) {
        array.push(data[i]);
    }
    return array;
}


export const filterDataInfoModal = (
    searchColumn: string,
    keyword: string,
    nominalFilter: number[],
    institution: TypeData[],
    data: InfoModalType[]
) => {

    let filteredData = data;

    const matchesFilter = (itemValue: string, filters: TypeData[]) =>
        filters.some((filter) => itemValue === filter.name);

    filteredData = filteredData.filter((item) =>
        matchesFilter(item.lembaga, institution)
    );
    const [nominalLower, nominalUpper] = nominalFilter;
    filteredData = filteredData.filter((item) => {
        const nominalValueInMillion = item.nominal / 1000000;
        return nominalValueInMillion >= nominalLower && nominalValueInMillion <= nominalUpper;
    });

    const keywordLower = keyword.toLowerCase();
    if (keyword) {
        filteredData = filteredData.filter((item) => {
            if (searchColumn === 'all') {
                return columnTabelInfoModal.some((column) => {
                    const itemValue = item[column.slug];
                    return column.slug === 'index' || column.slug == "nominal"
                        ? itemValue.toString().includes(keyword)
                        : itemValue.toLowerCase().includes(keywordLower);
                });
            } else {
                const itemValue = item[searchColumn];
                return searchColumn === 'index'
                    ? itemValue.toString().includes(keyword)
                    : itemValue.toLowerCase().includes(keywordLower);
            }
        });
    }
    return filteredData;
}

export const handleDeleteAllInfoModalFilter = (
    setKeyword: (keyword: string) => void,
    setNominalFilter: (column: number[]) => void,
    setInstitutionalFilter: (column: TypeData[]) => void

) => {
    setKeyword("");
    setNominalFilter([0, 10000])
    setInstitutionalFilter(institusionTypeData)

};

