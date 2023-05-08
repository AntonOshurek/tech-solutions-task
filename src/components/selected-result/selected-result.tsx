//services
import calculatePriceService from '../../services/calculate-price.service';
//components
import SelectedYears from './selected-years/selected-years';
import SelectedServices from './selected-services/selected-services';
//store
import { useAppSelector } from '../../utils/hooks';
import { SelectorGetServicesState, SelectorGetYearsState } from '../../store/selectors/selectors';
//types
import type { IServicesType, IYearsRangeDataType } from '../../types/data-types';
//styles
import './selected-result.scss';

interface ICalculateReturnType {
	price: number;
	recomendationForClient: string[];
}

const SelectedResultat = (): JSX.Element => {
	const selectedServices: IServicesType = useAppSelector(SelectorGetServicesState);
	const selectedYears: IYearsRangeDataType = useAppSelector(SelectorGetYearsState);

	// const result: ICalculateReturnType = calculatePriceService.calculate(
	// 	selectedServices,
	// 	selectedYears,
	// );

	return (
		<section className='services-result'>
			<h2 className='services-result__title'>Wybranę usługi</h2>

			<SelectedYears years={selectedYears} />
			<SelectedServices selectedServices={selectedServices} />

			{/* <p>{result.price ? `Całkowity koszt usług - ${result.price} zł` : null}</p>
			{result.recomendationForClient.map((item, i) => (
				<p key={item + i}>{item} - będzie taniej!</p>
			))} */}
		</section>
	);
};

export default SelectedResultat;
