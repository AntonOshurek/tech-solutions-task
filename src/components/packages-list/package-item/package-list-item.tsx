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
	const { id, value, name } = packageItem;

	// value classes added in styles, used for add svg icons and active icon class.
	const basicStyleClasses = `packages-list__label packages-icon packages-${value}-icon unselectable`;
	const activeStyleClasses = `packages-list__label packages-icon packages-${value}-icon packages-list__label--active packages-${packageItem.value}-icon--active`;
	const styleClasses = checked
		? `${basicStyleClasses} ${activeStyleClasses}`
		: `${basicStyleClasses}`;

	const onChoiceHandler = (): void => {
		onItemHandler(packageItem);
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
			/>
		</li>
	);
};

export default PackageListItem;
