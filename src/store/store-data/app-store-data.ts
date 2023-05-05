//variables
import { yearsRangeValuesNames } from '../../variables/variables';
//types
import { IStoreDataType } from '../../types/store-data-types';

export const appStoreData: IStoreDataType = {
	services: {},
	years: {
		[yearsRangeValuesNames.A]: 0,
		[yearsRangeValuesNames.B]: 0,
	},
};
