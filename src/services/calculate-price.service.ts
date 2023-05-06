//services
import servicesDataService from './services-data.service';
//types
// import type { ServicesDiscountsType } from '../types/services-data-types';

class CalculatePriceService {
	// private prices: IServicesPricesType;
	// private discounts: ServicesDiscountsType;

	// constructor(prices: IServicesPricesType, discounts: ServicesDiscountsType) {
	// 	this.prices = prices;
	// 	this.discounts = discounts;
	// }

	calculate(services: string[], years: number[]): number {
		const resultPrice = 0;
		// let discountPrice = null;

		// console.log(services);

		// this.discounts.forEach((disc) => {
		// 	const setDiscount = disc.services.every((item) => services.includes(item));
		// 	if (setDiscount) {
		// 		console.log('discount - ' + disc.price);
		// 		discountPrice = disc.price;
		// 	}
		// });

		// for (const service of services) {
		// 	for (const year of years) {
		// 		let price: number;

		// 		if (discountPrice) {
		// 			console.log('discountPrice - ' + discountPrice);
		// 			price = discountPrice;
		// 		} else {
		// 			price = this.prices[service][year];
		// 		}

		// 		console.log('price - ' + price);

		// 		if (price) {
		// 			console.log('resultPrice before - ' + resultPrice);
		// 			resultPrice += price;
		// 			console.log('resultPrice after - ' + resultPrice);
		// 		}
		// 	}
		// }

		return resultPrice;
	}
}

// const calculatePriceService = new CalculatePriceService(
// 	servicesDataService.getPrices(),
// 	servicesDataService.getDiscounts(),
// );

// export default calculatePriceService;
