//services
import calculatePriceService from '../../services/calculate-price.service';
//utils
import { transformDataToCalculate } from '../../utils/auxiliary';
//components
import SelectedYears from './selected-years/selected-years';
import SelectedServices from './selected-services/selected-services';
//store
import { useAppSelector } from '../../utils/hooks';
import { SelectorGetServicesState, SelectorGetYearsState } from '../../store/selectors/selectors';
//types
import type { ITransformedDataToCalculate } from '../../types/data-types';
//styles
import './selected-result.scss';

const SelectedResultat = (): JSX.Element => {
	const currentServices = useAppSelector(SelectorGetServicesState);
	const currentYears = useAppSelector(SelectorGetYearsState);

	const dataToCalculate: ITransformedDataToCalculate = transformDataToCalculate(
		currentServices,
		currentYears,
	);

	const price = calculatePriceService.calculate(dataToCalculate.services, dataToCalculate.years);

	return (
		<section className='services-result'>
			<h2 className='services-result__title'>Wybranę usługi</h2>

			<SelectedYears years={dataToCalculate.years} />
			<SelectedServices currentServices={dataToCalculate.services} />

			<p>{price ? `Całkowity koszt usług - ${price} zł` : null}</p>
		</section>
	);
};

export default SelectedResultat;
