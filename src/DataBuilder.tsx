import { TypeData } from "./components/table/Selection";

export const menuItemsData = [
  { label: "Beranda", href: "/" },
  { label: "Data UMKM", href: "/data-umkm" },
  { label: "Statistik", href: "/statistics" },
  { label: "Galeri Produk", href: "#" },
  { label: "Info Modal", href: "#" },
];

export const serviceItemsData = [
  {
    title: "Datfar UMKM Sekarang",
    desc: "Daftarkan UMKM anda untuk meningkatkan promosi",
    image: "register.png",
  },
  {
    title: "Cari Data UMKM ",
    desc: "Dapatkan data UMKM di seluruh Kabupaten Kulon Progo",
    image: "search-data.png",
  },
  {
    title: "Lihat Produk",
    desc: "Tingkatkan UMKM dengan 'Bela Beli Kulon Progo' ",
    image: "shopping.png",
  },
];

export const socialMediaData = [
  { path: "/logo/ig.svg", url: "#" },
  { path: "/logo/twt.svg", url: "#" },
  { path: "/logo/web.svg", url: "#" },
  { path: "/logo/yt.svg", url: "#" },
];

export const FaqsData = [
  {
    title: "Apa itu e-UMKM Kulon Progo?",
    content:
      "LearnNow is a platform where you can find a variety of online and offline courses suitable for learners of all levels.",
  },
  {
    title: "Apakah ini situs resmi pemerintah Kulon Progo?",
    content:
      "LearnNow is a user-friendly platform designed to help individuals in discovering courses that align with their interests and goals. Simply browse through the available courses and enroll in those that you find interesting.",
  },
  {
    title: "Bagaiamana cara mendaftarkan UMKM baru?",
    content:
      "To list your courses on LearnNow, you can fill out a submission form on our website or contact us via email at info@email.com.",
  },
  {
    title: "Apakah saya bisa menjual produk saya di situs ini?",
    content:
      "LearnNow serves as a platform for course discovery and does not take responsibility for the quality or content of the courses listed. Users are advised to conduct their own research before enrolling.",
  },
];
export interface titleSlugType {
  title: string;
  slug: string;
}

export const dataColumnUMKMBuilder: titleSlugType[] = [
  {
    title: "ID",
    slug: "index",
  },
  {
    title: "Nama UMKM",
    slug: "name",
  },
  {
    title: "Skala Usaha",
    slug: "skala",
  },
  {
    title: "Bidang",
    slug: "bidang",
  },
  {
    title: "Badan Hukum",
    slug: "badanHukum",
  },
  {
    title: "Pengampu",
    slug: "pengampu",
  },
  {
    title: "Alamat",
    slug: "alamat",
  },
];

export interface nameSlugType {
  name: string;
  slug: string;
}

export const skalaUsaha = [
  {
    name: "Usaha Menengah",
    slug: "menengah",
  },
  {
    name: "Usaha Kecil",
    slug: "kecl",
  },
  {
    name: "Usaha Mikro",
    slug: "mikro",
  },
];

export const badanHukumUsaha:TypeData[] = [
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

export const dinasPengampu = [
  {
    name: "Dinas PMD Dalduk",
    slug: "dalduk",
  },
  {
    name: "Dinas Sosial",
    slug: "sosial",
  },
  {
    name: "Dinas Kelautan dan Perikanan",
    slug: "perikanan",
  },
  {
    name: "Dinas Perhubungan",
    slug: "perhubungan",
  },
  {
    name: "Dinas Pariwisata",
    slug: "pariwisata",
  },
  {
    name: "Dinas Lingkungan Hidup",
    slug: "lingkungan",
  },
  {
    name: "Dinas Koperasi dan UKM",
    slug: "koprasi_ukm",
  },
  {
    name: "Dinas Pertanian dan Pangan",
    slug: "pertanian_pangan",
  },
  {
    name: "Dinas Perdagangan dan Perindustrian",
    slug: "perdangan",
  },
];

export const bidangUsaha = [
  {
    name: "Pertanian",
    slug: "pertanian",
  },
  {
    name: "Perikanan",
    slug: "perikanan",
  },
  {
    name: "Perdagangan",
    slug: "perdagangan",
  },
  {
    name: "Industri Manufaktur",
    slug: "industri-manufaktur",
  },
  {
    name: "Konstruksi",
    slug: "konstruksi",
  },
  {
    name: "Transportasi dan Logistik",
    slug: "transportasi-logistik",
  },
  {
    name: "Teknologi Informasi",
    slug: "teknologi-informasi",
  },
  {
    name: "Jasa Keuangan",
    slug: "jasa-keuangan",
  },
  {
    name: "Kesehatan",
    slug: "kesehatan",
  },
  {
    name: "Pendidikan",
    slug: "pendidikan",
  },
  {
    name: "Pariwisata",
    slug: "pariwisata",
  },
  {
    name: "Energi dan Sumber Daya Mineral",
    slug: "energi-sumber-daya-mineral",
  },
  {
    name: "Properti dan Real Estat",
    slug: "properti-real-estat",
  },
  {
    name: "Pertambangan",
    slug: "pertambangan",
  },
  {
    name: "Hukum dan Konsultasi",
    slug: "hukum-konsultasi",
  },
];
export interface UMKMProperties {
  index: number;
  avatar: string;
  name: string;
  skala: string;
  bidang: string;
  badanHukum: string;
  pengampu: string;
  noTelp: string;
  alamat: string;
  [key: string]: any;
}

export const umkmData = [
  {
    index: 1,
    avatar: "/logo-umkm/logo-umkm-1.png",
    name: "Kopi Starprog",
    skala: "Usaha Menengah",
    bidang: "Industri Manufaktur",
    badanHukum: "CV",
    pengampu: "Dinas Koperasi dan UKM",
    noTelp: "086868130401",
    alamat: "RT 10 RW 00, Gentan, Sidorejo, Lendah",
  },
  {
    index: 9,
    avatar: "/logo-umkm/logo-umkm-2.jpg",
    name: "Tigan Jaya",
    skala: "Usaha Kecil",
    badanHukum: "Perseorangan",
    bidang: "Industri Manufaktur",
    pengampu: "Dinas Sosial",
    noTelp: "086868130401",
    alamat: "RT 12 RW 00, Pulo, Gulurejo, Lendah",
  },
  {
    index: 21,
    avatar: "/logo-umkm/logo-umkm-1.png",
    name: "Kangenanku",
    skala: "Usaha Mikro",
    badanHukum: "PT",
    bidang: "Industri Manufaktur",
    pengampu: "Dinas Koperasi dan UKM",
    noTelp: "086868130401",
    alamat: "RT 05 RW 01, Banaran, Jatirejo, Lendah",
  },
];
