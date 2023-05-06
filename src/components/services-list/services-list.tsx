import { ChangeEvent, useEffect, useState } from 'react';
//services
import servicesDataService from '../../services/services-data.service';
//components
import ServiceListItem from './service-item/service-list-item';
//store
import { useAppDispatch } from '../../utils/hooks';
import { setServicesAction } from '../../store/slices/app-slice';
//types
import type { IServiceItemType, ServicesItemsType } from '../../types/services-data-types';
//styles
import './services-list.scss';

const ServicesList = (): JSX.Element => {
	const servicesData = servicesDataService.getServices();
	const dispatch = useAppDispatch();

	const [checkedService, setCheckedService] = useState<ServicesItemsType>([]);

	const onServiceInputHandler = (item: IServiceItemType): void => {
		setCheckedService((prev) => {
			let result: ServicesItemsType;
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

	return (
		<div className='services-list'>
			<h2 className='services-list__title'>Wybierz usługę</h2>

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
