export interface titleSlugType {
    title: string;
    slug: string;
}

export type productType = {
    id: number;
    gambar: string;
    nama: string;
    kategori: string;
    lokasi: string;
    harga: number;
    umkm: string;
    like: number;
    isLiked: boolean;
};