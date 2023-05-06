//utils
import { transformYearsRangeToArray } from '../utils/utils';
//types
import type { ServicesItemsType, IServiceItemType } from '../types/services-data-types';
import { IYearsRangeDataType } from '../types/data-types';

type test = boolean | IServiceItemType;

class CalculatePriceService {
	calculate(services: ServicesItemsType, years: IYearsRangeDataType): number {
		const calculatedServices: IServiceItemType[] = [];
		let resultPrise = 0;
		const yearsArray: number[] = transformYearsRangeToArray(years);

		for (const service of services) {
			if (service.discounts) {
				//перебираем все массивы со скидками в сервисе
				service.discounts.forEach((disc) => {
					const discountItems: test[] = [];
					//перебираем массив сервисов со скидками
					disc.services.forEach((discService) => {
						const result = services.find((item) => item.value === discService);
						discountItems.push(result ? result : false);
					});

					const dontDiscount = discountItems.includes(false);

					console.log(dontDiscount);

					//если выполнены все условия скидки (выбраны все сервисы для скидки)
					if (dontDiscount === false) {
						if (!calculatedServices.includes(service)) {
							// resultPrise += disc.prices;

							for (const year of yearsArray) {
								const price = disc.prices[year];
								if (price) {
									resultPrise += price;
								}
							}
							//записываем сервисы, для которых сейчас расчитаем стоимость в массив
							discountItems.forEach((discItem) => {
								if (typeof discItem !== 'boolean') {
									calculatedServices.push(discItem);
								}
							});
						}
					} else {
						for (const year of yearsArray) {
							const price = service.prices[year];
							if (price) {
								resultPrise += price;
							}
						}
					}
				});
			} else {
				if (!calculatedServices.includes(service)) {
					console.log('else');
					for (const year of yearsArray) {
						const price = service.prices[year];
						if (price) {
							resultPrise += price;
						}
					}
				}
			}
		}

		return resultPrise;
	}
}

const calculatePriceService = new CalculatePriceService();

export default calculatePriceService;
