import { useEffect, useState } from 'react';
//components
import PackageListItem from './package-item/package-list-item';
//services
import servicesDataService from '../../services/data.service';
//store
import { useAppDispatch } from '../../utils/hooks';
import { setPackagesAction } from '../../store/slices/app-slice';
//types
import { IPackagesType, IPackageType } from '../../types/data-types';
//styles
import './packages-list.scss';

const PackagesList = (): JSX.Element => {
	const packagesData: IPackagesType = servicesDataService.getPackages();
	const dispatch = useAppDispatch();

	const [checkedPackage, setCheckedPackage] = useState<IPackageType | null>(null);

	const onServiceInputHandler = (item: IPackageType): void => {
		if (JSON.stringify(checkedPackage) === JSON.stringify(item)) {
			setCheckedPackage(null);
		} else {
			setCheckedPackage(item);
		}
	};

	useEffect(() => {
		if (checkedPackage !== null) {
			dispatch(setPackagesAction({ pack: checkedPackage }));
		} else {
			dispatch(setPackagesAction({ pack: null }));
		}
	}, [checkedPackage]);

	return (
		<div className='packages-list'>
			<h2 className='packages-list__title'>Wybierz pakiet usług</h2>

			<ul className='packages-list__list'>
				{packagesData.map((packageItem) => (
					<PackageListItem
						onItemHandler={onServiceInputHandler}
						key={packageItem.id}
						packageItem={packageItem}
						checked={checkedPackage?.id === packageItem.id ? true : false}
					/>
				))}
			</ul>
		</div>
	);
};

export default PackagesList;
