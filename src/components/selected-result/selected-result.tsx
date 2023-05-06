//services
// import calculatePriceService from '../../services/calculate-price.service';
//components
import SelectedYears from './selected-years/selected-years';
import SelectedServices from './selected-services/selected-services';
//store
import { useAppSelector } from '../../utils/hooks';
import { SelectorGetServicesState, SelectorGetYearsState } from '../../store/selectors/selectors';
//types
import type { ServicesItemsType } from '../../types/services-data-types';
//styles
import './selected-result.scss';

const SelectedResultat = (): JSX.Element => {
	const selectedServices: ServicesItemsType = useAppSelector(SelectorGetServicesState);
	const selectedYears = useAppSelector(SelectorGetYearsState);

	// const price = calculatePriceService.calculate(dataToCalculate.services, dataToCalculate.years);

	return (
		<section className='services-result'>
			<h2 className='services-result__title'>Wybranę usługi</h2>

			<SelectedYears years={selectedYears} />
			<SelectedServices selectedServices={selectedServices} />

			{/* <p>{price ? `Całkowity koszt usług - ${price} zł` : null}</p> */}
		</section>
	);
};

export default SelectedResultat;
