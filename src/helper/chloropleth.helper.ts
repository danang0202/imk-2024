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
    if (windowWidth >= EXTENDED_WINDOW.md) {
        result = (width * height) / 3.5
    }
    if (windowWidth >= EXTENDED_WINDOW.xl) {
        result = (width * height) / 5.5
    }

    return result;
}
export const getMapCenter = (windowWidth: number): [number, number] => {
    let result: [number, number] = [110.49972222222, -7.8980555555556]
    if (windowWidth >= EXTENDED_WINDOW.md) {
        result = [110.47972222222, -7.820555555556]
    }
    if (windowWidth >= EXTENDED_WINDOW.lg) {
        result = [110.35972222222, -7.820555555556]
    }
    if (windowWidth >= EXTENDED_WINDOW.xl) {
        result = [110.2749, -7.81]
    }
    return result;
}