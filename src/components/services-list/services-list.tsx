import { useEffect, useState } from 'react';
//services
import servicesDataService from '../../services/data.service';
//components
import ServiceListItem from './service-item/service-list-item';
//store
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setServicesAction } from '../../store/slices/app-slice';
import { SelectorGetPackagesState } from '../../store/selectors/selectors';
//types
import type { IServicesType, IServiceType } from '../../types/data-types';
import type { PackageStoreDataType } from '../../types/store-data-types';
//styles
import './services-list.scss';

const ServicesList = (): JSX.Element => {
	const servicesData: IServicesType = servicesDataService.getServices();
	const selectedPackage: PackageStoreDataType = useAppSelector(SelectorGetPackagesState);
	const dispatch = useAppDispatch();

	const [checkedService, setCheckedService] = useState<IServicesType>([]);

	const onServiceInputHandler = (item: IServiceType): void => {
		setCheckedService((prev) => {
			let result: IServicesType;
			if (prev.find((prevItem) => prevItem.id === item.id)) {
				result = prev.filter((p) => p !== item);
			} else {
				result = [...prev, item];
			}
			return result;
		});
	};

	useEffect(() => {
		dispatch(setServicesAction({ services: checkedService }));
	}, [checkedService]);

	useEffect(() => {
		if (selectedPackage !== null) {
			setCheckedService((prev) => {
				const newServices: IServicesType = prev.filter((item) => {
					if (
						selectedPackage.servicesInside.includes(item.value) ||
						selectedPackage.freeService?.includes(item.value)
					) {
						return null;
					} else {
						return item;
					}
				});
				return newServices;
			});
		}
	}, [selectedPackage]);

	return (
		<div className='services-list'>
			<h2 className='services-list__title'>Wybierz serwis</h2>

			<ul className='services-list__list'>
				{servicesData.map((service) => (
					<ServiceListItem
						onItemHandler={onServiceInputHandler}
						key={service.id}
						serviceItem={service}
						checked={checkedService.find((item) => item.id === service.id) ? true : false}
					/>
				))}
			</ul>
		</div>
	);
};

export default ServicesList;
