//types
import type { ICheckedServiceDataType } from '../types/store-data-types';
import type { IServiceItemType, ServicesItemsType } from '../types/services-data-types';

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
