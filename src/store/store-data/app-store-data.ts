//variables
import { yearsRangeValuesNames } from '../../variables/variables';
//types
import type { IStoreDataType } from '../../types/store-data-types';

export const appStoreData: IStoreDataType = {
	services: [],
	pack: null,
	yearsRange: {
		[yearsRangeValuesNames.A]: 0,
		[yearsRangeValuesNames.B]: 0,
	},
};
