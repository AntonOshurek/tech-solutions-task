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
			discounts: [
				{
					discountName: 'internet + television',
					services: ['internet', 'television'],
					prices: { 2023: 79, 2024: 79, 2025: 79 },
				},
				{
					discountName: 'internet + phoneSubscription',
					services: ['internet', 'phoneSubscription'],
					prices: { 2023: 64, 2024: 64, 2025: 64 },
				},
			],
		},
		{
			name: 'Telewizja',
			id: nanoid(),
			value: 'television',
			prices: { 2023: 49, 2024: 49, 2025: 59 },
			discounts: [
				{
					discountName: 'internet + television',
					services: ['internet', 'television'],
					prices: { 2023: 79, 2024: 79, 2025: 79 },
				},
			],
		},
		{
			name: 'Abonament telefoniczny',
			id: nanoid(),
			value: 'phoneSubscription',
			prices: { 2023: 64, 2024: 64, 2025: 64 },
			discounts: [
				{
					discountName: 'internet + phoneSubscription',
					services: ['internet', 'phoneSubscription'],
					prices: { 2023: 64, 2024: 64, 2025: 64 },
				},
			],
		},
		{
			name: 'Decoder 4K',
			id: nanoid(),
			value: 'decoder4k',
			prices: { 2023: 29, 2024: 29, 2025: 29 },
			free: ['internet', 'television', 'decoder4k'],
		},
	],
	availableYears: [2023, 2024, 2025],
};

export const testData = {
	services: [
		{ name: 'Internet', id: nanoid(), value: 'internet', prices: { 2023: 39, 2024: 49, 2025: 59 } },
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
			required: 'television',
			prices: { 2023: 29, 2024: 29, 2025: 29 },
		},
	],
	packages: [
		{
			name: 'Telewizja + Internet + Decoder 4K',
			servicesInside: ['television', 'internet', 'decoder4k'],
			id: nanoid(),
			value: 'package-telintdec',
			prices: { 2023: 79, 2024: 89, 2025: 99 },
		},
		{
			name: 'Internet + Abonament telefoniczny',
			servicesInside: ['internet', 'phoneSubscription'],
			id: nanoid(),
			value: 'package-telintdec',
			prices: { 2023: 64, 2024: 64, 2025: 64 },
		},
	],
	availableYears: [2023, 2024, 2025],
};
