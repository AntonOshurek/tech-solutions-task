//types
import type { ICheckedServiceDataType, IYearsDataType } from '../types/data-types';
import type { IServiceItemType, ServicesItemsType } from '../types/services-data-types';
import type { ITransformedDataToCalculate } from '../types/data-types';

export const transformServicesListToState = (
	servicesList: ServicesItemsType,
): ICheckedServiceDataType => {
	const result = servicesList.reduce(function (
		target: ICheckedServiceDataType,
		key: IServiceItemType,
	) {
		target[key.id] = false;
		return target;
	},
	{});
	return result;
};

export const transformDataToCalculate = (
	services: ICheckedServiceDataType,
	years: IYearsDataType,
): ITransformedDataToCalculate => {
	let transformedYears: number[] = [];
	const transformedServices: string[] = [];

	for (const item in services) {
		if (services[item] === true) {
			transformedServices.push(item);
		}
	}

	const sortedYears = Object.values(years).sort((a, b) => a - b);
	transformedYears = sortedYears[0] === sortedYears[1] ? [sortedYears[0]] : sortedYears;

	const transformedData = {
		years: transformedYears,
		services: transformedServices,
	};

	return transformedData;
};
