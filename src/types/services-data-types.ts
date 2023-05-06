export interface IServiceDiscount {
	discountName: string;
	services: string[];
	prices: { [year: number]: number };
}

export interface IServiceItemType {
	name: string;
	id: string;
	value: string;
	prices: { [year: number]: number };
	discounts?: IServiceDiscount[];
	free?: string[];
}

export type ServicesItemsType = IServiceItemType[];

export type ServicesYearsType = number[];

export interface IServicesDataType {
	services: ServicesItemsType;
	availableYears: ServicesYearsType;
}
