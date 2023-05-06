//utils
import { transformYearsRangeToArray } from '../../../utils/utils';
//types
import type { IYearsRangeDataType } from '../../../types/data-types';
//styles
import './selected-years.scss';

interface ISelectedServicesYearsProps {
	years: IYearsRangeDataType;
}

const SelectedYears = ({ years }: ISelectedServicesYearsProps): JSX.Element => {
	const yearsArray: number[] = transformYearsRangeToArray(years);

	return (
		<article className='selected-years'>
			<h3 className='selected-years__title'>Wybrany okres usług</h3>
			<div className='selected-years__years'>
				<span className='selected-years__description'>{yearsArray[1] ? 'lata: ' : 'rok: '}</span>
				<span className='selected-years__years'>{yearsArray[0]}</span>
				{yearsArray[1] ? <span className='selected-years__years'> - {yearsArray[1]}</span> : null}
			</div>
		</article>
	);
};

export default SelectedYears;
