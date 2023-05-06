//types
import type { IYearsRangeDataType } from '../../../types/data-types';
//styles
import './selected-years.scss';

interface ISelectedServicesYearsProps {
	years: IYearsRangeDataType;
}

const SelectedYears = ({ years }: ISelectedServicesYearsProps): JSX.Element => {
	const sortedYears = Object.values(years).sort((a, b) => a - b);
	const transformedYears = sortedYears[0] === sortedYears[1] ? [sortedYears[0]] : sortedYears;

	return (
		<article className='selected-years'>
			<h3 className='selected-years__title'>Wybrany okres usług</h3>
			<div className='selected-years__years'>
				<span className='selected-years__description'>
					{transformedYears[1] ? 'lata: ' : 'rok: '}
				</span>
				<span className='selected-years__years'>{transformedYears[0]}</span>
				{transformedYears[1] ? (
					<span className='selected-years__years'> - {transformedYears[1]}</span>
				) : null}
			</div>
		</article>
	);
};

export default SelectedYears;
