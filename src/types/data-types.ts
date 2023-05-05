//variables
import { yearsRangeValuesNames } from '../variables/variables';

export interface ITransformedDataToCalculate {
	years: number[];
	services: string[];
}

export interface ICheckedServiceDataType {
	[name: string]: boolean;
}

export interface IYearsDataType {
	[yearsRangeValuesNames.A]: number;
	[yearsRangeValuesNames.B]: number;
}
