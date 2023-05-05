//types
import { IYearsDataType } from '../../../types/data-types';
//styles
import './selected-years.scss';

interface ISelectedServicesYearsProps {
	years: number[];
}

const SelectedYears = ({ years }: ISelectedServicesYearsProps): JSX.Element => {
	return (
		<article className='selected-years'>
			<h3 className='selected-years__title'>Wybrany okres usług</h3>
			<div className='selected-years__years'>
				<span className='selected-years__description'>{years[1] ? 'lata: ' : 'rok: '}</span>
				<span className='selected-years__years'>{years[0]}</span>
				{years[1] ? <span className='selected-years__years'> - {years[1]}</span> : null}
			</div>
		</article>
	);
};

export default SelectedYears;
