import { EXTENDEDCOLORS, UMKMProperties } from "../DataBuilder";
import { TypeData } from "../components/table/Selection";

export interface seriesType {
    label: string;
    name: string;
    color: string;
}

export const getStackedChartData = (
    umkmData: UMKMProperties[],
    kecamatanList: string[],
    criteria: TypeData[]
): any[] => {
    const result: any[] = kecamatanList.map((kecamatan: string) => {
        const initialData: any = {
            kecamatan,
        };

        // Initialize counters for each criteria
        criteria.forEach((item: TypeData) => {
            initialData[item.slug] = 0;
        });

        // Count UMKM based on criteria
        umkmData.forEach((umkm: UMKMProperties) => {
            if (umkm.kecamatan === kecamatan) {
                criteria.forEach((item: TypeData) => {
                    if (
                        umkm.skala === item.name ||
                        umkm.badanHukum === item.name ||
                        umkm.pengampu === item.name ||
                        umkm.bidang === item.name
                    ) {
                        initialData[item.slug] += 1;
                    }
                });
            }
        });

        return initialData;
    });
    // console.log(result);
    return result;
};

export const chartKecamatanAndSkalaUsahaSeries = [
    {
        name: "mikro",
        label: "Usaha Mikro",
        color: EXTENDEDCOLORS.accent6,
    },
    {
        name: "menengah",
        label: "Usaha Menengah",
        color: EXTENDEDCOLORS.accent3,
    },
    {
        name: "kecil",
        label: "Usaha Kecil",
        color: EXTENDEDCOLORS.accent4,
    },
]

export const chartKecamatanAndBadanHukum = [
    {
        name: "perseorangan",
        label: "Perseorangan",
        color: EXTENDEDCOLORS.accent6,
    },
    {
        name: "cv",
        label: "CV",
        color: EXTENDEDCOLORS.accent3,
    },
    {
        name: "pt",
        label: "PT",
        color: EXTENDEDCOLORS.accent4,
    },
    {
        name: "firma",
        label: "Firma",
        color: EXTENDEDCOLORS.accent5,
    },
]


export const chartKecamatanAndDinasPengampu = [
    {
        label: "Dinas PMD Dalduk",
        name: "dalduk",
        color: EXTENDEDCOLORS.accent2,
    },
    {
        label: "Dinas Sosial",
        name: "sosial",
        color: EXTENDEDCOLORS.accent3,
    },
    {
        label: "Dinas Kelautan dan Perikanan",
        name: "perikanan",
        color: EXTENDEDCOLORS.accent4,
    },
    {
        label: "Dinas Perhubungan",
        name: "perhubungan",
        color: EXTENDEDCOLORS.accent5,
    },
    {
        label: "Dinas Pariwisata",
        name: "pariwisata",
        color: EXTENDEDCOLORS.accent6,
    },
    {
        label: "Dinas Lingkungan Hidup",
        name: "lingkungan",
        color: EXTENDEDCOLORS.info,
    },
    {
        label: "Dinas Koperasi dan UKM",
        name: "koperasi_ukm",
        color: EXTENDEDCOLORS.grey,
    },
    {
        label: "Dinas Pertanian dan Pangan",
        name: "pertanian_pangan",
        color: EXTENDEDCOLORS.greyBlue,
    },
    {
        label: "Dinas Perdagangan dan Perindustrian",
        name: "perdangan",
        color: EXTENDEDCOLORS.black,
    },
]

export const getDataCountPerCategory = (data: UMKMProperties[], criteria: TypeData[]) => {
    const result = criteria.map((item) => {
        const count = data.filter(umkm =>
            umkm.skala === item.name ||
            umkm.badanHukum === item.name ||
            umkm.pengampu === item.name ||
            umkm.bidang === item.name
        ).length;

        return {
            name: item.name,
            value: count,
            color: EXTENDEDCOLORS.greyDark
        };
    });
    return result;
}

export const getDataCountPerCategoryForPieChart = (data: UMKMProperties[], criteria: TypeData[]) => {
    const result = criteria.map((item) => {
        const count = data.filter(umkm =>
            umkm.skala === item.name ||
            umkm.badanHukum === item.name ||
            umkm.pengampu === item.name ||
            umkm.bidang === item.name
        ).length;

        return {
            name: item.name,
            value: count,
            color: getPieChartColor(item.slug)
        };
    });
    return result;
}

const getPieChartColor = (item: string) => {
    if (item == 'mikro') {
        return EXTENDEDCOLORS.accent6
    } else if (item == 'menengah') {
        return EXTENDEDCOLORS.accent3
    } else if (item == 'kecil') {
        return EXTENDEDCOLORS.accent4
    } else if (item == 'perseorangan') {
        return EXTENDEDCOLORS.accent6
    } else if (item == 'cv') {
        return EXTENDEDCOLORS.accent3
    } else if (item == 'pt') {
        return EXTENDEDCOLORS.accent4
    } else if (item == 'firma') {
        return EXTENDEDCOLORS.accent5
    } else if (item == 'dalduk') {
        return EXTENDEDCOLORS.accent2
    } else if (item == 'sosial') {
        return EXTENDEDCOLORS.accent3
    } else if (item == 'perikanan') {
        return EXTENDEDCOLORS.accent4
    } else if (item == 'perhubungan') {
        return EXTENDEDCOLORS.accent5
    } else if (item == 'pariwisata') {
        return EXTENDEDCOLORS.accent6
    } else if (item == 'lingkungan') {
        return EXTENDEDCOLORS.info
    } else if (item == 'koperasi_ukm') {
        return EXTENDEDCOLORS.grey
    } else if (item == 'pertanian_pangan') {
        return EXTENDEDCOLORS.greyBlue
    } else {
        return EXTENDEDCOLORS.black
    }
}
