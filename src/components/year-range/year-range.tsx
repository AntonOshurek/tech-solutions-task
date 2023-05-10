import { CSSProperties, ChangeEvent, useEffect, useState } from 'react';
//services
import servicesDataService from '../../services/data.service';
//store
import { useAppDispatch } from '../../utils/hooks';
import { setYearsRangeAction } from '../../store/slices/app-slice';
//variables
import { yearsRangeValuesNames } from '../../variables/variables';
//types
import type { IYearsRangeDataType } from '../../types/data-types';
//styles
import './year-range.scss';

const YearRange = (): JSX.Element => {
	const servicesYearsData = servicesDataService.getYears();
	const MIN_YEAR = Math.min(...servicesYearsData);
	const MAX_YEAR = Math.max(...servicesYearsData);
	const YEAR_RANGE_STEP = 1;

	const dispatch = useAppDispatch();

	const initialRangeState: IYearsRangeDataType = {
		[yearsRangeValuesNames.A]: MIN_YEAR,
		[yearsRangeValuesNames.B]: MAX_YEAR,
	};

	const [rangeValues, setRangeValues] = useState<IYearsRangeDataType>(initialRangeState);

	const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
		const evt = event.target;

		setRangeValues({
			...rangeValues,
			[evt.id]: +evt.value,
		});
	};

	useEffect(() => {
		dispatch(setYearsRangeAction({ years: rangeValues }));
	}, [rangeValues]);

	return (
		<div className='year-range'>
			<div
				className='year-range__wrap'
				style={
					{
						'--a': rangeValues.a,
						'--b': rangeValues.b,
						'--min': MIN_YEAR,
						'--max': MAX_YEAR,
					} as CSSProperties
				}
			>
				<h3 className='year-range__title'>Wybierz rok</h3>

				<div className='year-range__set'>
					<label
						className='year-range__label year-range__label--a'
						htmlFor='a'
						aria-label='Wartość pierwszego zakresu'
					>
						Od
					</label>
					<output className='year-range__output year-range__output--a' name='a' htmlFor='a'>
						{rangeValues.a}
					</output>
					<input
						onInput={handleInput}
						className='year-range__input'
						id={yearsRangeValuesNames.A}
						name='price-range'
						type='range'
						min={MIN_YEAR}
						value={rangeValues.a}
						max={MAX_YEAR}
						step={YEAR_RANGE_STEP}
					/>
					<label
						className='year-range__label year-range__label--b'
						htmlFor='b'
						aria-label='Wartość drugiego zakresu'
					>
						Do
					</label>
					<output className='year-range__output year-range__output--b' name='b' htmlFor='b'>
						{rangeValues.b}
					</output>
					<input
						onInput={handleInput}
						className='year-range__input'
						id={yearsRangeValuesNames.B}
						name='price-range'
						type='range'
						min={MIN_YEAR}
						value={rangeValues.b}
						max={MAX_YEAR}
						step={YEAR_RANGE_STEP}
					/>
				</div>
			</div>
		</div>
	);
};

export default YearRange;
