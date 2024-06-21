import { EXTENDEDCOLORS, UMKMProperties } from "../DataBuilder";
import { TypeData } from "../components/table/Selection";
import * as d3 from "d3";

export interface seriesType {
    label: string;
    name: string;
    color: string;
}

interface StackedChartData {
    kecamatan: string;
    [key: string]: number | string;
    total: number;
}

export const getStackedChartData = (
    umkmData: UMKMProperties[],
    kecamatanList: string[],
    criteria: TypeData[]
): StackedChartData[] => {
    const result: StackedChartData[] = kecamatanList.map((kecamatan: string) => {
        const initialData: StackedChartData = {
            kecamatan,
            total: 0, // Tambahkan properti total untuk menghitung total UMKM
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
                        initialData[item.slug] = (initialData[item.slug] as number) + 1;
                        initialData.total += 1;
                    }
                });
            }
        });
        return initialData;
    });
    const newResult: StackedChartData[] = result.filter((item) => item.total !== 0)
    newResult.sort((a, b) => b.total - a.total);

    return newResult;
};


const colorScale = d3
    .scaleThreshold<number, string>()
    .domain([5, 10, 15, 20])
    .range(d3.schemeBlues[4]);

const colorScaleFilter = d3
    .scaleThreshold<number, string>()
    .domain([5, 10, 15])
    .range(d3.schemeBlues[3]);


export const getDataCountKategoryPerKecamatan = (data: UMKMProperties[], kecamatan: string[], filter: TypeData) => {
    let result = kecamatan.map((item) => {
        let count = 0;
        if (filter.slug == "semua") {
            count = data.filter(umkm =>
                umkm.kecamatan == item
            ).length;
        } else {
            count = data.filter((umkm) =>
                umkm.kecamatan === item && umkm.skala === filter.name
            ).length;
        }

        let color = colorScale(count)

        if (filter.slug !== "semua") {
            color = colorScaleFilter(count)
        }

        return {
            name: item,
            value: count,
            color: color
        };
    });
    result = result.filter((item) => item.value != 0)
    result.sort((a, b) => b.value - a.value)
    return result;
}



export const chartKecamatanAndSkalaUsahaSeries = [
    {
        name: "mikro",
        label: "Usaha Mikro",
        color: EXTENDEDCOLORS.purpleDarkChart,
    },
    {
        name: "menengah",
        label: "Usaha Menengah",
        color: EXTENDEDCOLORS.orangeLightChart,
    },
    {
        name: "kecil",
        label: "Usaha Kecil",
        color: EXTENDEDCOLORS.blueChart,
    },
]

export const chartKecamatanAndBadanHukum = [
    {
        name: "perseorangan",
        label: "Perseorangan",
        color: EXTENDEDCOLORS.purpleDarkChart,
    },
    {
        name: "cv",
        label: "CV",
        color: EXTENDEDCOLORS.orangeLightChart,
    },
    {
        name: "pt",
        label: "PT",
        color: EXTENDEDCOLORS.accent6,
    },
    {
        name: "firma",
        label: "Firma",
        color: EXTENDEDCOLORS.blueChart,
    },
]


export const chartKecamatanAndDinasPengampu = [
    {
        label: "Dinas PMD Dalduk",
        name: "dalduk",
        color: EXTENDEDCOLORS.purpleDarkChart,
    },
    {
        label: "Dinas Sosial",
        name: "sosial",
        color: EXTENDEDCOLORS.orangeLightChart,
    },
    {
        label: "Dinas Kelautan dan Perikanan",
        name: "perikanan",
        color: EXTENDEDCOLORS.accent6,
    },
    {
        label: "Dinas Perhubungan",
        name: "perhubungan",
        color: EXTENDEDCOLORS.blueChart,
    },
    {
        label: "Dinas Pariwisata",
        name: "pariwisata",
        color: EXTENDEDCOLORS.orangeChart,
    },
    {
        label: "Dinas Lingkungan Hidup",
        name: "lingkungan",
        color: EXTENDEDCOLORS.grey,
    },
    {
        label: "Dinas Koperasi dan UKM",
        name: "koperasi_ukm",
        color: EXTENDEDCOLORS.accent5,
    },
    {
        label: "Dinas Pertanian dan Pangan",
        name: "pertanian_pangan",
        color: EXTENDEDCOLORS.accent4,
    },
    {
        label: "Dinas Perdagangan dan Perindustrian",
        name: "perdangan",
        color: EXTENDEDCOLORS.blueLightChart,
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
        };
    });

    result.sort((a, b) => b.value - a.value)
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
    result.sort((a, b) => b.value - a.value)
    return result;
}

const getPieChartColor = (item: string) => {
    if (item == 'mikro') {
        return EXTENDEDCOLORS.purpleDarkChart
    } else if (item == 'menengah') {
        return EXTENDEDCOLORS.orangeLightChart
    } else if (item == 'kecil') {
        return EXTENDEDCOLORS.blueChart
    } else if (item == 'perseorangan') {
        return EXTENDEDCOLORS.purpleDarkChart
    } else if (item == 'cv') {
        return EXTENDEDCOLORS.orangeLightChart
    } else if (item == 'pt') {
        return EXTENDEDCOLORS.accent6
    } else if (item == 'firma') {
        return EXTENDEDCOLORS.blueChart
    } else if (item == 'dalduk') {
        return EXTENDEDCOLORS.purpleDarkChart
    } else if (item == 'sosial') {
        return EXTENDEDCOLORS.orangeLightChart
    } else if (item == 'perikanan') {
        return EXTENDEDCOLORS.accent6
    } else if (item == 'perhubungan') {
        return EXTENDEDCOLORS.blueChart
    } else if (item == 'pariwisata') {
        return EXTENDEDCOLORS.orangeChart
    } else if (item == 'lingkungan') {
        return EXTENDEDCOLORS.grey
    } else if (item == 'koperasi_ukm') {
        return EXTENDEDCOLORS.accent5
    } else if (item == 'pertanian_pangan') {
        return EXTENDEDCOLORS.accent4
    } else {
        return EXTENDEDCOLORS.blueLightChart
    }
}
