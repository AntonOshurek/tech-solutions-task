import { yearsRangeValuesNames } from '../variables/variables';

export interface ICheckedServiceDataType {
	[name: string]: boolean;
}

export interface IYearsDataType {
	[yearsRangeValuesNames.A]: number;
	[yearsRangeValuesNames.B]: number;
}

export interface IStoreDataType {
	services: ICheckedServiceDataType;
	years: IYearsDataType;
}
