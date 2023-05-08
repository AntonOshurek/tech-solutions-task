//services
import calculatePriceService from '../../services/calculate-price.service';
//components
import SelectedYears from './selected-years/selected-years';
import SelectedServices from './selected-services/selected-services';
import SelectedPackage from './selected-package/selected-package';
//store
import { useAppSelector } from '../../utils/hooks';
import {
	SelectorGetServicesState,
	SelectorGetYearsState,
	SelectorGetPackagesState,
} from '../../store/selectors/selectors';
//types
import type { IPackageType, IServicesType, IYearsRangeDataType } from '../../types/data-types';
//styles
import './selected-result.scss';

const SelectedResultat = (): JSX.Element => {
	const selectedServicesData: IServicesType = useAppSelector(SelectorGetServicesState);
	const selectedPackageData: IPackageType | null = useAppSelector(SelectorGetPackagesState);
	const selectedYears: IYearsRangeDataType = useAppSelector(SelectorGetYearsState);

	const result: number = calculatePriceService.calculate({
		services: selectedServicesData,
		years: selectedYears,
		packageItem: selectedPackageData,
	});

	return (
		<section className='services-result'>
			<h2 className='services-result__title'>Wybranę usługi</h2>

			<SelectedYears years={selectedYears} />

			{selectedPackageData && <SelectedPackage selectedPackage={selectedPackageData} />}

			{selectedServicesData.length > 0 && (
				<SelectedServices selectedServices={selectedServicesData} />
			)}

			<p>{result ? `Całkowity koszt usług - ${result} zł` : null}</p>
		</section>
	);
};

export default SelectedResultat;
