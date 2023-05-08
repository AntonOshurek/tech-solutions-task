import { useEffect, useState } from 'react';
//components
import PackageListItem from './package-item/package-list-item';
//services
import servicesDataService from '../../services/data.service';
//store
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setPackagesAction } from '../../store/slices/app-slice';
import { SelectorGetServicesState } from '../../store/selectors/selectors';
//types
import { IPackagesType, IPackageType } from '../../types/data-types';
//styles
import './packages-list.scss';

const PackagesList = (): JSX.Element => {
	const packagesData: IPackagesType = servicesDataService.getPackages();
	const selectedServices = useAppSelector(SelectorGetServicesState);
	const dispatch = useAppDispatch();

	const [checkedPackage, setCheckedPackage] = useState<IPackageType | null>(null);

	const onServiceInputHandler = (item: IPackageType): void => {
		if (JSON.stringify(checkedPackage) === JSON.stringify(item)) {
			setCheckedPackage(null);
		} else {
			setCheckedPackage(item);
		}
	};

	function compareArrays(arr1: string[], arr2: string[]): boolean {
		// if (arr1.length !== arr2.length) {
		// 	return false;
		// }
		// const arr1Sorted = arr1.slice().sort();
		// const arr2Sorted = arr2.slice().sort();
		// return arr1Sorted.every((val, index) => val === arr2Sorted[index]);

		const set1 = new Set(arr1);
		const set2 = new Set(arr2);
		return Array.from(set1).every((val) => set2.has(val));
	}

	useEffect(() => {
		if (checkedPackage !== null) {
			dispatch(setPackagesAction({ pack: checkedPackage }));
		} else {
			dispatch(setPackagesAction({ pack: null }));
		}
	}, [checkedPackage]);

	useEffect(() => {
		const selectedServicesArray = selectedServices.map((item) => item.value);

		for (const pack of packagesData) {
			if (compareArrays(pack.servicesInside, selectedServicesArray)) {
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
