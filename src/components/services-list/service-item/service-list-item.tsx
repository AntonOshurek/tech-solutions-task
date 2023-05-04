import { ChangeEvent } from 'react';
//types
import type { IServiceItemType } from '../../../types/services-data-types';
//styles
import './service-list-item.scss';

interface IServiceItemPropsType {
	onItemHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
	serviceItem: IServiceItemType;
	checked: boolean;
}

const ServiceListItem = ({
	onItemHandler,
	serviceItem,
	checked,
}: IServiceItemPropsType): JSX.Element => {
	const basicStyleClasses = `services-list__label service-icon service-${serviceItem.id}-icon unselectable`;
	const activeStyleClasses = `services-list__label service-icon service-${serviceItem.id}-icon services-list__label--active service-${serviceItem.id}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses}`
		: `${basicStyleClasses}`;

	return (
		<li className='services-list__item'>
			<label className={styleClasses} htmlFor={serviceItem.id}>
				{serviceItem.name}
			</label>
			<input
				onChange={onItemHandler}
				className='visually-hidden'
				type='checkbox'
				id={serviceItem.id}
				value={serviceItem.value}
				name={serviceItem.id}
				checked={checked}
			/>
		</li>
	);
};

export default ServiceListItem;
