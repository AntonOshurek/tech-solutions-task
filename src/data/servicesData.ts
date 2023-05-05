//types
import type { IServicesDataType } from '../types/services-data-types';

export const servicesData: IServicesDataType = {
	services: [
		{
			name: 'Internet',
			id: 'internet',
			value: 'internet',
		},
		{
			name: 'Telewizja',
			id: 'television',
			value: 'television',
		},
		{
			name: 'Abonament telefoniczny',
			id: 'phoneSubscription',
			value: 'phoneSubscription',
		},
		{
			name: 'Decoder 4K',
			id: 'decoder4k',
			value: 'decoder4k',
		},
	],
	prices: {
		internet: { 2023: 39, 2024: 49, 2025: 59 },
		television: { 2023: 49, 2024: 49, 2025: 59 },
		phoneSubscription: { 2023: 64, 2024: 64, 2025: 64 },
		decoder4k: { 2023: 29, 2024: 29, 2025: 29 },
	},
	discounts: [
		{ services: ['internet', 'television'], years: [2023, 2024, 2025], price: 79 },
		{ services: ['internet', 'phoneSubscription'], years: [2023, 2024, 2025], price: 64 },
	],
	availableYears: [2023, 2024, 2025],
};
