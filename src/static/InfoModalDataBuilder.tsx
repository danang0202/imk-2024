import { TypeData } from "../components/table/Selection";
import { titleSlugType } from "../types/common.types";

export const columnTabelInfoModal: titleSlugType[] = [
  {
    title: "ID",
    slug: "index",
  },
  {
    title: "Nama Lembaga",
    slug: "name",
  },
  {
    title: "Email",
    slug: "email",
  },
  {
    title: "Jenis Lembaga",
    slug: "lembaga",
  },
  {
    title: "Nominal Modal",
    slug: "nominal",
  },
  {
    title: "Alamat",
    slug: "alamat",
  },
];

export const institusionTypeData: TypeData[] = [
  {
    name: "Pemerintah",
    slug: "pemerintah",
  },
  {
    name: "PT",
    slug: "pt",
  },
  {
    name: "CV",
    slug: "cv",
  },
  {
    name: "Firma",
    slug: "firma",
  },
  {
    name: "Koperasi",
    slug: "koperasi",
  },
  {
    name: "Yayasan",
    slug: "yayasan",
  },
  {
    name: "Perseorangan",
    slug: "perseorangan",
  },
];

export type InfoModalType = {
  index: number;
  avatar: string;
  name: string;
  email: string;
  lembaga: string;
  nominal: number;
  alamat: string;
  kecamatan: string;
  [key: string]: any;
};

export const infoModalData: InfoModalType[] = [
  {
    index: 1,
    avatar: "/logo-umkm/logo-company.png",
    name: "Bank BRI",
    email: "bri@gmail.com",
    lembaga: "Pemerintah",
    nominal: 200000000,
    alamat: "RT 10, RW 00, Gentan, Sidorejo, Lendah",
    kecamatan: "Lendah",
  },
  {
    index: 2,
    avatar: "/logo-umkm/logo-company.png",
    name: "PT Maju Jaya",
    email: "majujaya@gmail.com",
    lembaga: "PT",
    nominal: 1500000000,
    alamat: "RT 5, RW 2, Suryoputran, Wates",
    kecamatan: "Wates",
  },
  {
    index: 3,
    avatar: "/logo-umkm/logo-company.png",
    name: "CV Sukses Abadi",
    email: "suksesabadi@gmail.com",
    lembaga: "CV",
    nominal: 300000000,
    alamat: "RT 1, RW 3, Prawirodirjan, Sentolo",
    kecamatan: "Sentolo",
  },
  {
    index: 4,
    avatar: "/logo-umkm/logo-company.png",
    name: "Koperasi Simpan Pinjam Makmur",
    email: "makmur@gmail.com",
    lembaga: "Koperasi",
    nominal: 50000000,
    alamat: "RT 2, RW 1, Ngentak, Galur",
    kecamatan: "Galur",
  },
  {
    index: 5,
    avatar: "/logo-umkm/logo-company.png",
    name: "Firma Bersama",
    email: "bersama@gmail.com",
    lembaga: "Firma",
    nominal: 80000000,
    alamat: "RT 6, RW 4, Janturan, Pengasih",
    kecamatan: "Pengasih",
  },
  {
    index: 6,
    avatar: "/logo-umkm/logo-company.png",
    name: "Yayasan Amal Sejahtera",
    email: "amal@gmail.com",
    lembaga: "Yayasan",
    nominal: 100000000,
    alamat: "RT 8, RW 3, Kadipiro, Panjatan",
    kecamatan: "Panjatan",
  },
  {
    index: 7,
    avatar: "/logo-umkm/logo-company.png",
    name: "Bank Mandiri",
    email: "mandiri@gmail.com",
    lembaga: "Pemerintah",
    nominal: 250000000,
    alamat: "RT 3, RW 1, Brongkol, Kokap",
    kecamatan: "Kokap",
  },
  {
    index: 8,
    avatar: "/logo-umkm/logo-company.png",
    name: "PT Sejahtera Abadi",
    email: "sejahtera@gmail.com",
    lembaga: "PT",
    nominal: 1200000000,
    alamat: "RT 7, RW 2, Kalibawang, Nanggulan",
    kecamatan: "Nanggulan",
  },
  {
    index: 9,
    avatar: "/logo-umkm/logo-company.png",
    name: "CV Karya Utama",
    email: "karya@gmail.com",
    lembaga: "CV",
    nominal: 450000000,
    alamat: "RT 9, RW 5, Sidomulyo, Temon",
    kecamatan: "Temon",
  },
  {
    index: 10,
    avatar: "/logo-umkm/logo-company.png",
    name: "Koperasi Makmur Bersama",
    email: "makmur@gmail.com",
    lembaga: "Koperasi",
    nominal: 65000000,
    alamat: "RT 4, RW 3, Demen, Kalibawang",
    kecamatan: "Kalibawang",
  },
  {
    index: 11,
    avatar: "/logo-umkm/logo-company.png",
    name: "Firma Nusantara",
    email: "nusantara@gmail.com",
    lembaga: "Firma",
    nominal: 120000000,
    alamat: "RT 2, RW 1, Suroloyo, Samigaluh",
    kecamatan: "Samigaluh",
  },
  {
    index: 12,
    avatar: "/logo-umkm/logo-company.png",
    name: "Yayasan Peduli Sesama",
    email: "peduli@gmail.com",
    lembaga: "Yayasan",
    nominal: 140000000,
    alamat: "RT 5, RW 4, Ngemplak, Girimulyo",
    kecamatan: "Girimulyo",
  },
  {
    index: 13,
    avatar: "/logo-umkm/logo-company.png",
    name: "Bank BNI",
    email: "bni@gmail.com",
    lembaga: "Pemerintah",
    nominal: 300000000,
    alamat: "RT 6, RW 2, Trirenggo, Kalibawang",
    kecamatan: "Kalibawang",
  },
  {
    index: 14,
    avatar: "/logo-umkm/logo-company.png",
    name: "PT Sinar Abadi",
    email: "sinar@gmail.com",
    lembaga: "PT",
    nominal: 1750000000,
    alamat: "RT 8, RW 3, Sendangtirto, Samigaluh",
    kecamatan: "Samigaluh",
  },
  {
    index: 15,
    avatar: "/logo-umkm/logo-company.png",
    name: "CV Makmur Sejahtera",
    email: "makmur@gmail.com",
    lembaga: "CV",
    nominal: 350000000,
    alamat: "RT 1, RW 4, Banyuroto, Nanggulan",
    kecamatan: "Nanggulan",
  },
  {
    index: 16,
    avatar: "/logo-umkm/logo-company.png",
    name: "Koperasi Sejahtera",
    email: "sejahtera@gmail.com",
    lembaga: "Koperasi",
    nominal: 75000000,
    alamat: "RT 9, RW 2, Banjarharjo, Kalibawang",
    kecamatan: "Kalibawang",
  },
  {
    index: 17,
    avatar: "/logo-umkm/logo-company.png",
    name: "Firma Maju Bersama",
    email: "maju@gmail.com",
    lembaga: "Firma",
    nominal: 110000000,
    alamat: "RT 3, RW 1, Jogoyudan, Girimulyo",
    kecamatan: "Girimulyo",
  },
  {
    index: 18,
    avatar: "/logo-umkm/logo-company.png",
    name: "Yayasan Harapan Bangsa",
    email: "harapan@gmail.com",
    lembaga: "Yayasan",
    nominal: 160000000,
    alamat: "RT 7, RW 3, Kembangsari, Wates",
    kecamatan: "Wates",
  },
  {
    index: 19,
    avatar: "/logo-umkm/logo-company.png",
    name: "Bank BCA",
    email: "bca@gmail.com",
    lembaga: "Pemerintah",
    nominal: 275000000,
    alamat: "RT 5, RW 4, Kebonagung, Kokap",
    kecamatan: "Kokap",
  },
  {
    index: 20,
    avatar: "/logo-umkm/logo-company.png",
    name: "PT Aman Sentosa",
    email: "aman@gmail.com",
    lembaga: "PT",
    nominal: 1900000000,
    alamat: "RT 4, RW 1, Sendangagung, Pengasih",
    kecamatan: "Pengasih",
  },
];
