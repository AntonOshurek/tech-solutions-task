//types
import type { IYearsDataType, ICheckedServiceDataType } from './store-data-types';

export interface ISetServicesActionType {
	services: ICheckedServiceDataType;
}

export interface ISetYearsActionType {
	years: IYearsDataType;
}
