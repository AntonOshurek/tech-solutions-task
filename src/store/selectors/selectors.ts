//types
import type { RootState } from '../../types/store-types';
import type { ServicesItemsType } from '../../types/services-data-types';
import type { IYearsRangeDataType } from '../../types/data-types';

export const SelectorGetServicesState = (state: RootState): ServicesItemsType => state.app.services;
export const SelectorGetYearsState = (state: RootState): IYearsRangeDataType =>
	state.app.yearsRange;
