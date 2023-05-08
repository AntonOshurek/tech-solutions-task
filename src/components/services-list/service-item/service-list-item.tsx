import { useState, useEffect } from 'react';
//store
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import {
	SelectorGetPackagesState,
	SelectorGetServicesState,
} from '../../../store/selectors/selectors';
//types
import type { IPackageType, IServiceType, IServicesType } from '../../../types/data-types';
//styles
import './service-list-item-icons.scss';
import { setServicesAction } from '../../../store/slices/app-slice';

interface IServiceItemPropsType {
	onItemHandler: (serviceItem: IServiceType) => void;
	serviceItem: IServiceType;
	checked: boolean;
}

const ServiceListItem = ({
	onItemHandler,
	serviceItem,
	checked,
}: IServiceItemPropsType): JSX.Element => {
	const selectedServices = useAppSelector(SelectorGetServicesState);
	const selectedPackage: IPackageType | null = useAppSelector(SelectorGetPackagesState);

	const dispatch = useAppDispatch();

	const [disabled, setDisabled] = useState<boolean>(false);

	const checkServicesInPackage = (): boolean => {
		let checkResult: boolean;

		if (selectedPackage !== null) {
			if (selectedPackage.servicesInside.includes(serviceItem.value)) {
				checkResult = true;
				setDisabled(true);
			} else {
				checkResult = false;
				setDisabled(false);
			}
		} else {
			checkResult = false;
			setDisabled(false);
		}

		return checkResult;
	};

	useEffect(() => {
		if (serviceItem.required && !checkServicesInPackage()) {
			const requiredServiceIsSelected = selectedServices.find((element) => {
				if (element.value === serviceItem.required) {
					return true;
				} else {
					return false;
				}
			});

			if (requiredServiceIsSelected) {
				setDisabled(false);
			} else {
				setDisabled(true);

				if (selectedServices.find((prevItem) => prevItem.id === serviceItem.id)) {
					const result: IServicesType = selectedServices.filter((p) => p !== serviceItem);
					dispatch(setServicesAction({ services: result }));
				}
			}
		} else {
			checkServicesInPackage();
		}
	}, [selectedServices, selectedPackage]);

	// value classes added in styles, used for add svg icons and active icon class.
	const disabledClass = disabled ? 'services-list__label--disabled' : '';
	const basicStyleClasses = `services-list__label service-icon service-${serviceItem.value}-icon unselectable`;
	const activeStyleClasses = `services-list__label service-icon service-${serviceItem.value}-icon services-list__label--active service-${serviceItem.value}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses} ${disabledClass}`
		: `${basicStyleClasses} ${disabledClass}`;

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
				disabled={disabled}
			/>
		</li>
	);
};

export default ServiceListItem;
