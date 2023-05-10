//types
import type { IYearsRangeDataType, IServicesType } from './data-types';
import type { PackageStoreDataType } from './store-data-types';

export interface ISetServicesActionType {
	services: IServicesType;
}

export interface ISetPackageActionType {
	pack: PackageStoreDataType;
}

export interface ISetYearsActionType {
	years: IYearsRangeDataType;
}
