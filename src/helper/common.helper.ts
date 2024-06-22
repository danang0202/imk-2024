import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { UMKMProperties } from '../DataBuilder';

export const handleDownloadExcel = (title: string, data: UMKMProperties[]) => {
    let ws = XLSX.utils.json_to_sheet([]);
    ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Save to file
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataExport = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataExport, `${title}.xlsx`);
};

export const handleDownloadPng = async (title: string, id: string) => {
    const svgElement = document.querySelector(`svg#${id}`);
    if (svgElement) {

        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svgElement);

        const canvas = document.createElement("canvas");
        canvas.width = svgElement.clientWidth;
        canvas.height = svgElement.clientHeight;
        const ctx = canvas.getContext("2d");

        const img = new Image();
        const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);
        if (ctx) {

            img.onload = async () => {
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const newUrl = URL.createObjectURL(blob);
                        const downloadLink = document.createElement("a");
                        downloadLink.href = newUrl;
                        downloadLink.download = title;
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                        URL.revokeObjectURL(newUrl);
                    }
                }, "image/png");

                URL.revokeObjectURL(url);
            };
        }
        img.src = url;
    }
};
