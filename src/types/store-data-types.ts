//types
import type { IServicesType, IYearsRangeDataType, IPackageType } from './data-types';

export interface IStoreDataType {
	services: IServicesType;
	pack: IPackageType | null;
	yearsRange: IYearsRangeDataType;
}
