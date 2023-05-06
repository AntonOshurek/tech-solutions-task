//data
import { servicesData } from '../data/servicesData';
//types
import type {
	IServicesDataType,
	ServicesItemsType,
	ServicesYearsType,
} from '../types/services-data-types';

class ServicesDataService {
	private servicesData: IServicesDataType;

	constructor(data: IServicesDataType) {
		this.servicesData = data;
		this.init();
	}

	getServices(): ServicesItemsType {
		return this.servicesData.services;
	}

	getYears(): ServicesYearsType {
		return this.servicesData.availableYears;
	}

	init(): void {
		//here we can send request to server for get services data
		//and write this data to private servicesData
		console.log('[ServicesDataService] init');
	}
}

const servicesDataService = new ServicesDataService(servicesData);

export default servicesDataService;
