//types
import type { IYearsRangeDataType } from '../types/data-types';

export const transformYearsRangeToArray = (yearsRange: IYearsRangeDataType): number[] => {
	const sortedYears = Object.values(yearsRange).sort((a, b) => a - b);
	const transformedYears = sortedYears[0] === sortedYears[1] ? [sortedYears[0]] : sortedYears;
	return transformedYears;
};

export const getFullYearsFromRange = (yearsRange: IYearsRangeDataType): number[] => {
	const yearsArray: number[] = transformYearsRangeToArray(yearsRange);
	const minYear = Math.min(...yearsArray);
	const maxYear = Math.max(...yearsArray);

	const allYears = Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index);
	return allYears;
};
