//types
import type { IYearsRangeDataType } from './data-types';
import type { ServicesItemsType } from './services-data-types';

export interface ISetServicesActionType {
	services: ServicesItemsType;
}

export interface ISetYearsActionType {
	years: IYearsRangeDataType;
}
