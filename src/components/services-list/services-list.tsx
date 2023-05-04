import { ChangeEvent, useEffect, useState } from 'react';
//components
import ServiceListItem from './service-item/service-list-item';
//data
import { servicesList } from '../../data/servicesData';
//types
import type { IInitialCheckedServiceStateType } from '../../types/components-types';
//utils
import { transformServicesListToState } from '../../utils/auxiliary';
//styles
import './services-list.scss';

const ServicesList = (): JSX.Element => {
	const initialServiceListState = transformServicesListToState(servicesList);

	const [checkedService, setCheckedService] =
		useState<IInitialCheckedServiceStateType>(initialServiceListState);

	const onServiceInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setCheckedService({
			...checkedService,
			[evt.target.value]: !checkedService[evt.target.value],
		});
	};

	useEffect(() => {
		// console.log(checkedService);
	}, [checkedService]);

	return (
		<ul className='services-list'>
			{servicesList.map((service) => (
				<ServiceListItem
					onItemHandler={onServiceInputHandler}
					key={service.id}
					serviceItem={service}
					checked={checkedService[service.id]}
				/>
			))}
		</ul>
	);
};

export default ServicesList;
