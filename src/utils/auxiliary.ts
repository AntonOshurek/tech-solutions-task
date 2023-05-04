//types
import type { IInitialCheckedServiceStateType } from '../types/components-types';
import type { IServiceItemType, ServicesItemsType } from '../types/services-data-types';

export const transformServicesListToState = (
	servicesList: ServicesItemsType,
): IInitialCheckedServiceStateType => {
	const result = servicesList.reduce(function (
		target: IInitialCheckedServiceStateType,
		key: IServiceItemType,
	) {
		target[key.id] = false;
		return target;
	},
	{});
	return result;
};
