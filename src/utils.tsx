import _ from 'lodash';
import { UMKMProperties } from './DataBuilder';

export const paginationUtils = (totalPage:number, page:number, siblings:number) => {
  const totalPgeNoInArray = 7 + siblings;
  if (totalPgeNoInArray >= totalPage) {
    return _.range(1, totalPage + 1);
  }
  const leftSiblingsIndex = Math.max(page - siblings, 1);
  const rightSiblingsIndex = Math.min(page + siblings, totalPage);

  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingsIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings;
    const leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, " ...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 3 * siblings;
    const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "... ", ...rightRange];
  } else {
    const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, "... ", ...middleRange, " ...", totalPage];
  }
};

export function fetchDataByPagination(data: UMKMProperties[], page: number, limit: number) {
  const array: UMKMProperties[] = [];
  for (let i = (page - 1) * limit; i < page * limit && i < data.length; i++) {
    array.push(data[i]);
  }
  return array;
}

export function getStartIndexData(page:number, limit:number) {
  return (page - 1) * limit + 1;
}

export function getEndIndexData(page:number, limit:number, lengthData:number) {
  const akhir = (page - 1) * limit + limit;
  return akhir <= lengthData ? akhir : lengthData;
}
