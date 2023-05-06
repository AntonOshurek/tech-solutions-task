//types
import type { IYearsRangeDataType } from './data-types';
import type { ServicesItemsType } from './services-data-types';

export interface IStoreDataType {
	services: ServicesItemsType;
	yearsRange: IYearsRangeDataType;
}
