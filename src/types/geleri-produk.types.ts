import { TypeData } from "../components/table/Selection";

export interface FilterProduct {
    keyword: string;
    sortedColumn: string;
    sortOrder: string;
    kategori: TypeData[];
    kecamatan: TypeData[];
    harga:number[]
}