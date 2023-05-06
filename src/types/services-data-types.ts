export interface IServiceItemType {
	name: string;
	id: string;
	value: string;
	prices: { [year: number]: number };
}

export type ServicesItemsType = IServiceItemType[];

export type ServicesYearsType = number[];

export interface IServicesDataType {
	services: ServicesItemsType;
	availableYears: ServicesYearsType;
}
