//store
import { useAppSelector } from '../../../utils/hooks';
import { SelectorGetServicesState } from '../../../store/selectors/selectors';
//types
import type { IPackageType } from '../../../types/data-types';
//styles
import './package-list-item-icons.scss';

interface IPackageItemPropsType {
	onItemHandler: (serviceItem: IPackageType) => void;
	packageItem: IPackageType;
	checked: boolean;
}

const PackageListItem = ({
	onItemHandler,
	packageItem,
	checked,
}: IPackageItemPropsType): JSX.Element => {
	// const selectedServices = useAppSelector(SelectorGetServicesState);

	// value classes added in styles, used for add svg icons and active icon class.
	const basicStyleClasses = `packages-list__label packages-icon packages-${packageItem.value}-icon unselectable`;
	const activeStyleClasses = `packages-list__label packages-icon packages-${packageItem.value}-icon packages-list__label--active packages-${packageItem.value}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses}`
		: `${basicStyleClasses}`;

	const onChoiceHandler = (): void => {
		onItemHandler(packageItem);
	};

	return (
		<li className='services-list__item'>
			<label className={styleClasses} htmlFor={packageItem.id}>
				{packageItem.name}
			</label>
			<input
				onChange={onChoiceHandler}
				className='visually-hidden'
				type='checkbox'
				id={packageItem.id}
				value={packageItem.value}
				name={packageItem.value}
				checked={checked}
			/>
		</li>
	);
};

export default PackageListItem;
