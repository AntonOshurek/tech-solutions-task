import { nanoid } from 'nanoid';
//types
import type { IServicesDataType } from '../types/services-data-types';

export const servicesData: IServicesDataType = {
	services: [
		{
			name: 'Internet',
			id: nanoid(),
			value: 'internet',
			prices: { 2023: 39, 2024: 49, 2025: 59 },
		},
		{
			name: 'Telewizja',
			id: nanoid(),
			value: 'television',
			prices: { 2023: 49, 2024: 49, 2025: 59 },
		},
		{
			name: 'Abonament telefoniczny',
			id: nanoid(),
			value: 'phoneSubscription',
			prices: { 2023: 64, 2024: 64, 2025: 64 },
		},
		{
			name: 'Decoder 4K',
			id: nanoid(),
			value: 'decoder4k',
			prices: { 2023: 29, 2024: 29, 2025: 29 },
		},
	],
	availableYears: [2023, 2024, 2025],
};

// discounts: [
// 	{ services: ['internet', 'television'], years: [2023, 2024, 2025], price: 79 },
// 	{ services: ['internet', 'phoneSubscription'], years: [2023, 2024, 2025], price: 64 },
// ],
