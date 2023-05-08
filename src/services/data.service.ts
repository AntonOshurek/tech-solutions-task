//data
import { data } from '../data/data';
//types
import type { IDataType, IServicesType, YearsDataType, IPackagesType } from '../types/data-types';

class ServicesDataService {
	servicesData: IDataType;

	constructor() {
		this.servicesData = this.getDataFromServe();
	}

	getServices(): IServicesType {
		return this.servicesData.services;
	}

	getPackages(): IPackagesType {
		return this.servicesData.packages;
	}

	getYears(): YearsDataType {
		return this.servicesData.availableYears;
	}

	getDataFromServe(): IDataType {
		//here we can get data from server side
		return data;
	}
}

const servicesDataService = new ServicesDataService();

export default servicesDataService;
