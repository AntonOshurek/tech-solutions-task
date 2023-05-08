//types
import type { IYearsRangeDataType, IServicesType, IPackageType } from './data-types';

export interface ISetServicesActionType {
	services: IServicesType;
}

export interface ISetPackagesActionType {
	pack: IPackageType | null;
}

export interface ISetYearsActionType {
	years: IYearsRangeDataType;
}
