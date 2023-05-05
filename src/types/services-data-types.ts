export interface IServiceItemType {
	name: string;
	id: string;
	value: string;
}

export type ServicesItemsType = IServiceItemType[];

export interface IServicesPricesType {
	[name: string]: {
		[year: number]: number;
	};
}

export interface IServiceDiscount {
	services: string[];
	years: number[];
	price: number;
}

export type ServicesDiscountsType = IServiceDiscount[];

export type ServicesYearsType = number[];

export interface IServicesDataType {
	services: ServicesItemsType;
	prices: IServicesPricesType;
	discounts: ServicesDiscountsType;
	availableYears: ServicesYearsType;
}
