//utils
import { transformYearsRangeToArray } from '../utils/utils';
//types
import type { ServicesItemsType } from '../types/services-data-types';
import { IYearsRangeDataType } from '../types/data-types';

class CalculatePriceService {
	calculate(services: ServicesItemsType, years: IYearsRangeDataType): number {
		let resultPrise = 0;
		const yearsArray: number[] = transformYearsRangeToArray(years);

		for (const service of services) {
			for (const year of yearsArray) {
				const price = service.prices[year];
				if (price) {
					resultPrise += price;
				}
			}
		}

		return resultPrise;
	}
}

const calculatePriceService = new CalculatePriceService();

export default calculatePriceService;
