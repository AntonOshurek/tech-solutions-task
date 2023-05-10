//types
import type { IServicesType, IYearsRangeDataType, IPackageType } from './data-types';

export type PackageStoreDataType = IPackageType | null;

export interface IStoreDataType {
	services: IServicesType;
	pack: PackageStoreDataType;
	yearsRange: IYearsRangeDataType;
}
