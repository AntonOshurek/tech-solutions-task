//types
import type { RootState } from '../../types/store-types';
import { ICheckedServiceDataType, IYearsDataType } from '../../types/data-types';

export const SelectorGetServicesState = (state: RootState): ICheckedServiceDataType =>
	state.app.services;
export const SelectorGetYearsState = (state: RootState): IYearsDataType => state.app.years;
