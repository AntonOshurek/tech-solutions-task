import { useEffect, useState } from 'react';
//components
import PackageListItem from './package-item/package-list-item';
//services
import servicesDataService from '../../services/data.service';
//utils
import { compareStringArrays } from '../../utils/utils';
//store
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setPackageAction } from '../../store/slices/app-slice';
import { SelectorGetServicesState } from '../../store/selectors/selectors';
//types
import type { IPackagesType, IPackageType, IServicesType } from '../../types/data-types';
import type { PackageStoreDataType } from '../../types/store-data-types';
//styles
import './packages-list.scss';

const PackagesList = (): JSX.Element => {
	const packagesData: IPackagesType = servicesDataService.getPackages();
	const selectedServices: IServicesType = useAppSelector(SelectorGetServicesState);
	const dispatch = useAppDispatch();

	const [checkedPackage, setCheckedPackage] = useState<PackageStoreDataType>(null);

	const onServiceInputHandler = (item: IPackageType): void => {
		if (JSON.stringify(checkedPackage) === JSON.stringify(item)) {
			setCheckedPackage(null);
		} else {
			setCheckedPackage(item);
		}
	};

	useEffect(() => {
		dispatch(setPackageAction({ pack: checkedPackage }));
	}, [checkedPackage]);

	useEffect(() => {
		const selectedServicesArray = selectedServices.map((item) => item.value);
		for (const pack of packagesData) {
			if (compareStringArrays(pack.servicesInside, selectedServicesArray)) {
				setCheckedPackage(pack);
				break;
			}
		}
	}, [selectedServices]);

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
