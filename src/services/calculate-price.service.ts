//utils
import { getFullYearsFromRange, transformYearsRangeToArray } from '../utils/utils';
//types
import type { ServicesItemsType, IServiceItemType } from '../types/services-data-types';
import type { IYearsRangeDataType } from '../types/data-types';

type test = boolean | IServiceItemType;

interface ICalculateReturnType {
	price: number;
	recomendationForClient: string[];
}

class CalculatePriceService {
	calculate(services: ServicesItemsType, years: IYearsRangeDataType): ICalculateReturnType {
		console.log('start-----------------------------------------------------');

		const calculatedServices: IServiceItemType[] = [];

		let resultPrise = 0;

		const recomendationForClient: string[] = [];

		const allYears = getFullYearsFromRange(years);

		const calculateWithouDiscount = (service: IServiceItemType): void => {
			if (!calculatedServices.includes(service)) {
				for (const year of allYears) {
					const price = service.prices[year];

					if (price) {
						resultPrise += price;
					}
				}
			}
		};

		for (const service of services) {
			//проверяем, что мы ещё не посчитали данный сервис
			if (!calculatedServices.includes(service)) {
				//расчёт сервисов если есть скидка
				const serviceDiscounts = service.discounts;
				if (serviceDiscounts) {
					// перебираем все массивы со скидками в сервисе
					serviceDiscounts.forEach((disc, discIndex) => {
						const discountItems: test[] = [];
						//перебираем массив сервисов со скидкой при единовременном заказе
						disc.services.forEach((discService) => {
							// проверяем, есть ли сервис со скидкой в выбранных пользователем сервисах
							const result = services.find((item) => item.value === discService);
							if (result) {
								// если в массиве с сервисамя для скидки есть такой сервис, то добавляем его
								discountItems.push(result);
							} else {
								// если нет сервиса со скидкой в выбранных пользователем, то заносим его в
								// в массив с советами, с предложением о заказе дополнительного сервиса со скидкой
								discountItems.push(false);
								// buyerAdvice.push(discService);
							}
						});
						console.log(`disc - ${disc.discountName}`);
						console.log(discountItems);
						// проверяем, все ли сервисы из скидок, были выбраны пользователем
						const dontDiscount = discountItems.includes(false);

						if (!calculatedServices.includes(service)) {
							//если выполнены все условия скидки (пользователем выбраны все сервисы для скидки)
							if (dontDiscount === false) {
								for (const year of allYears) {
									const price = disc.prices[year];
									if (price) {
										resultPrise += price;
									}
								}

								//записываем сервисы, для которых сейчас расчитаем стоимость в массив
								discountItems.forEach((discItem) => {
									if (typeof discItem !== 'boolean') {
										calculatedServices.includes(discItem)
											? null
											: calculatedServices.push(discItem);
									}
								});
							} else {
								if (serviceDiscounts.length - 1 === discIndex) {
									calculateWithouDiscount(service);
									//записываем сервисы, для которых сейчас расчитаем стоимость в массив
									recomendationForClient.push(disc.discountName);
									discountItems.forEach((discItem) => {
										if (typeof discItem !== 'boolean') {
											calculatedServices.includes(discItem)
												? null
												: calculatedServices.push(discItem);
										}
									});
								}
							}
						}
					});
				} else if (service.free) {
					const discountItems: test[] = [];

					service.free.forEach((freeItem) => {
						// проверяем, есть ли сервис со скидкой в выбранных пользователем сервисах
						const result = services.find((item) => item.value === freeItem);
						if (result) {
							// если в массиве с сервисамя для скидки есть такой сервис, то добавляем его
							discountItems.push(result);
						} else {
							// если нет сервиса со скидкой в выбранных пользователем, то заносим его в
							// в массив с советами, с предложением о заказе дополнительного сервиса со скидкой
							discountItems.push(false);
							// buyerAdvice.push(discService);
						}
					});

					// проверяем, все ли сервисы из скидок, были выбраны пользователем
					const dontDiscount = discountItems.includes(false);

					if (!calculatedServices.includes(service)) {
						if (dontDiscount === true) {
							calculateWithouDiscount(service);
						}
					}
				} else {
					//расчёт стоимости без скидки
					calculateWithouDiscount(service);
				}
			}
		}

		console.log('END---------------------------------------------------');
		const resultObject: ICalculateReturnType = {
			price: resultPrise,
			recomendationForClient: recomendationForClient,
		};
		return resultObject;
	}
}

const calculatePriceService = new CalculatePriceService();

export default calculatePriceService;
