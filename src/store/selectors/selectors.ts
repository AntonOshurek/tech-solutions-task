//types
import type { RootState } from '../../types/store-types';
import type { IYearsRangeDataType, IServicesType, IPackageType } from '../../types/data-types';

export const SelectorGetServicesState = (state: RootState): IServicesType => state.app.services;
export const SelectorGetPackagesState = (state: RootState): IPackageType | null => state.app.pack;
export const SelectorGetYearsState = (state: RootState): IYearsRangeDataType =>
	state.app.yearsRange;
