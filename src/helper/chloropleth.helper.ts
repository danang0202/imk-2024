import { useState, useEffect, useLayoutEffect } from "react";
import { EXTENDED_WINDOW } from "../DataBuilder";

export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

    const getDimensions = () => {
        return {
            width: targetRef.current ? targetRef.current.offsetWidth : 0,
            height: targetRef.current ? targetRef.current.offsetHeight : 0
        };
    };

    const [dimensions, setDimensions] = useState(getDimensions);

    const handleResize = () => {
        setDimensions(getDimensions());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useLayoutEffect(() => {
        handleResize();
    }, []);

    return dimensions;
};

export const skalaUsahaFilterChloropleth = [
    {
        name: "Semua",
        slug: "semua",
    },
    {
        name: "Usaha Mikro",
        slug: "mikro",
    },
    {
        name: "Usaha Kecil",
        slug: "kecil",
    },
    {
        name: "Usaha Menengah",
        slug: "menengah",
    },
];

export const getFilteredValue = (data: { total: number; menengah: number; kecil: number; mikro: number }, filter: string): number => {
    switch (filter) {
        case "semua":
            return data.total;
        case "mikro":
            return data.mikro;
        case "kecil":
            return data.kecil;
        case "menengah":
            return data.menengah;
        default:
            return data.total;
    }
};

export const getMapScale = (windowWidth: number, width: number, height: number): number => {
    let result = (width * height) / 3
    if (windowWidth >= 400) {
        result = (width * height) / 3.5
    }
    if (windowWidth >= 500) {
        result = (width * height) / 5
    }
    if (windowWidth >= 640) {
        result = (width * height) / 6
    }
    if (windowWidth >= 700) {
        result = (width * height) / 6
    }
    if (windowWidth >= 750) {
        result = (width * height) / 7
    }
    if (windowWidth >= 765) {
        result = (width * height) / 5
    }
    if (windowWidth >= EXTENDED_WINDOW.xl) {
        result = (width * height) / 5.5
    }
    if (windowWidth >= 2000) {
        result = (width * height) / 6
    }
    if (windowWidth >= 2100) {
        result = (width * height) / 7
    }
    if (windowWidth >= 2500) {
        result = (width * height) / 8
    }


    return result;
}
export const getMapCenter = (windowWidth: number): [number, number] => {
    let result: [number, number] = [110.49972222222, -7.8980555555556]
    if (windowWidth >= 320) {
        result = [110.56972222222, -7.920555555556]
    }
    if (windowWidth >= 350) {
        result = [110.50972222222, -7.900555555556]
    }
    if (windowWidth >= 450) {
        result = [110.40972222222, -7.880555555556]
    }
    if (windowWidth >= 550) {
        result = [110.37972222222, -7.850555555556]
    }
    if (windowWidth >= 600) {
        result = [110.37972222222, -7.890555555556]
    }
    if (windowWidth >= 700) {
        result = [110.37972222222, -7.890555555556]
    }
    if (windowWidth >= 750) {
        result = [110.30972222222, -7.900555555556]
    }
    if (windowWidth >= 765) {
        result = [110.60972222222, -7.800555555556]
    }
    if (windowWidth >= 860) {
        result = [110.50972222222, -7.800555555556]
    }
    // if (windowWidth >= EXTENDED_WINDOW.md) {
    //     result = [110.47972222222, -7.820555555556]
    // }
    if (windowWidth >= EXTENDED_WINDOW.lg) {
        result = [110.35972222222, -7.820555555556]
    }
    if (windowWidth >= EXTENDED_WINDOW.xl) {
        result = [110.5049, -7.810555555556]
    }
    if (windowWidth >= 1300) {
        result = [110.4949, -7.81]
    }
    if (windowWidth >= 1500) {
        result = [110.3949, -7.81]
    }
    if (windowWidth >= 1700) {
        result = [110.2949, -7.81]
    }
    return result;
}