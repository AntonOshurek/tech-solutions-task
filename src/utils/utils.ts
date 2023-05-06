//types
import type { IYearsRangeDataType } from '../types/data-types';

export const transformYearsRangeToArray = (yearsRange: IYearsRangeDataType): number[] => {
	const sortedYears = Object.values(yearsRange).sort((a, b) => a - b);
	const transformedYears = sortedYears[0] === sortedYears[1] ? [sortedYears[0]] : sortedYears;
	return transformedYears;
};
