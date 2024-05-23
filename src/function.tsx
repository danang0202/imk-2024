import { titleSlugType } from "./DataBuilder";

export function getTitleNameFromSlug(data: titleSlugType[], slug: string) {
  if (slug == "all") {
    return "Semua";
  } else {
    for (const item of data) {
      if (item.slug === slug) {
        return item.title; 
      }
    }
    return "Not Found";
  }
}
