import { ChangeEvent, useEffect, useState } from 'react';
//services
import servicesDataService from '../../services/services-data.service';
//components
import ServiceListItem from './service-item/service-list-item';
//store
import { useAppDispatch } from '../../utils/hooks';
import { setServicesAction } from '../../store/slices/app-slice';
//types
import type { ICheckedServiceDataType } from '../../types/store-data-types';
//utils
import { transformServicesListToState } from '../../utils/auxiliary';
//styles
import './services-list.scss';

const ServicesList = (): JSX.Element => {
	const servicesData = servicesDataService.getServices();
	const initialServiceListState = transformServicesListToState(servicesData);

	const dispatch = useAppDispatch();

	const [checkedService, setCheckedService] =
		useState<ICheckedServiceDataType>(initialServiceListState);

	const onServiceInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setCheckedService({
			...checkedService,
			[evt.target.value]: !checkedService[evt.target.value],
		});
	};

	useEffect(() => {
		console.log(checkedService);
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
						checked={checkedService[service.id]}
					/>
				))}
			</ul>
		</div>
	);
};

export default ServicesList;
