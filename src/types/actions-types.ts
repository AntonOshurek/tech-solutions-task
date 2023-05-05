//types
import type { IYearsDataType, ICheckedServiceDataType } from './data-types';

export interface ISetServicesActionType {
	services: ICheckedServiceDataType;
}

export interface ISetYearsActionType {
	years: IYearsDataType;
}
