import { ChangeEvent } from 'react';
//types
import type { IServiceItemType } from '../../../types/services-data-types';
//styles
import './service-list-item.scss';

interface IServiceItemPropsType {
	onItemHandler: (serviceItem: IServiceItemType) => void;
	serviceItem: IServiceItemType;
	checked: boolean;
}

const ServiceListItem = ({
	onItemHandler,
	serviceItem,
	checked,
}: IServiceItemPropsType): JSX.Element => {
	// value classes added in styles, used for add svg icons and active icon class.
	const basicStyleClasses = `services-list__label service-icon service-${serviceItem.value}-icon unselectable`;
	const activeStyleClasses = `services-list__label service-icon service-${serviceItem.value}-icon services-list__label--active service-${serviceItem.value}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses}`
		: `${basicStyleClasses}`;

	const onChoiceHandler = (): void => {
		onItemHandler(serviceItem);
	};

	return (
		<li className='services-list__item'>
			<label className={styleClasses} htmlFor={serviceItem.id}>
				{serviceItem.name}
			</label>
			<input
				onChange={onChoiceHandler}
				className='visually-hidden'
				type='checkbox'
				id={serviceItem.id}
				value={serviceItem.value}
				name={serviceItem.value}
				checked={checked}
			/>
		</li>
	);
};

export default ServiceListItem;
