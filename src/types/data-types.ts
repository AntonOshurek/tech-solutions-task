//variables
import { yearsRangeValuesNames } from '../variables/variables';

export interface IYearsRangeDataType {
	[yearsRangeValuesNames.A]: number;
	[yearsRangeValuesNames.B]: number;
}

export type YearsDataType = number[];

export interface IPricesType {
	[year: number]: number;
}

export interface IServiceType {
	name: string;
	id: string;
	value: string;
	required?: string;
	prices: IPricesType;
}
export type IServicesType = IServiceType[];

export interface IPackageType {
	name: string;
	servicesInside: string[];
	id: string;
	value: string;
	prices: IPricesType;
}

export type IPackagesType = IPackageType[];

export interface IDataType {
	services: IServicesType;
	packages: IPackagesType;
	availableYears: YearsDataType;
}
