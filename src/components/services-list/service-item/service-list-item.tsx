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
	const { required, value, id, name } = serviceItem;
	const selectedServices = useAppSelector(SelectorGetServicesState);
	const selectedPackage: IPackageType | null = useAppSelector(SelectorGetPackagesState);

	const dispatch = useAppDispatch();

	const [disabled, setDisabled] = useState<boolean>(false);

	useEffect(() => {
		//sprawdzamy, czy mamy serwis w pakiecie usług?
		const serviceIncludeInPackage = selectedPackage?.servicesInside.includes(value) ? true : false;

		//esli mamy znacznik required i nie mamy serwisu w wybranym pakiecie...
		if (required && !serviceIncludeInPackage) {
			//wtedy sprawdzamy, czy serwis który jest potrzebny do wyboru naszego serwisu, jest wybrany czy nie?
			const requiredServiceIsSelected = selectedServices.find((element) => {
				if (element.value === required) {
					return true;
				} else {
					return false;
				}
			});

			if (requiredServiceIsSelected) {
				//jeśli serwis, który jest potrzeby do odblokowania naszego serwisu jest już wybrany, to nie robimy disabled
				setDisabled(false);
			} else {
				//jeśli nie jest wybrany, to robimy disabled
				setDisabled(true);

				//jeśli serwis powinien być disabled, to trzeba go usunąć ze stor'a aplikacji
				if (selectedServices.find((prevItem) => prevItem.id === id)) {
					const result: IServicesType = selectedServices.filter((p) => p !== serviceItem);
					dispatch(setServicesAction({ services: result }));
				}
			}
		} else {
			//jeśli nie mamy znaczniku "required" to tylko sprawdzamy obecność serwisu w wybranym pakiecie
			if (serviceIncludeInPackage) {
				setDisabled(true);
			} else {
				setDisabled(false);
			}
		}
	}, [selectedServices, selectedPackage]);

	// value classes added in styles, used for add svg icons and active icon class.
	const disabledClass = disabled ? 'services-list__label--disabled' : '';
	const basicStyleClasses = `services-list__label service-icon service-${value}-icon unselectable`;
	const activeStyleClasses = `services-list__label service-icon service-${value}-icon services-list__label--active service-${serviceItem.value}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses} ${disabledClass}`
		: `${basicStyleClasses} ${disabledClass}`;

	const onChoiceHandler = (): void => {
		onItemHandler(serviceItem);
	};

	return (
		<li className='services-list__item'>
			<label className={styleClasses} htmlFor={id}>
				{name}
			</label>
			<input
				onChange={onChoiceHandler}
				className='visually-hidden'
				type='checkbox'
				id={id}
				value={value}
				name={value}
				checked={checked}
				disabled={disabled}
			/>
		</li>
	);
};

export default ServiceListItem;
