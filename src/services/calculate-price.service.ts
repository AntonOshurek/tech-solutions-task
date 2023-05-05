//services
import servicesDataService from './services-data.service';
//types
import type { IServicesPricesType, ServicesDiscountsType } from '../types/services-data-types';

class CalculatePriceService {
	private prices: IServicesPricesType;
	private discounts: ServicesDiscountsType;

	constructor(prices: IServicesPricesType, discounts: ServicesDiscountsType) {
		this.prices = prices;
		this.discounts = discounts;
	}

	calculate(services: string[], years: number[]): number {
		let resultPrice = 0;

		for (const service of services) {
			for (const year of years) {
				const price = this.prices[service][year];
				if (price) {
					resultPrice += price;
				}
			}
		}

		return resultPrice;
	}
}

const calculatePriceService = new CalculatePriceService(
	servicesDataService.getPrices(),
	servicesDataService.getDiscounts(),
);

export default calculatePriceService;
