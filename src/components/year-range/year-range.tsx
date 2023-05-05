import { CSSProperties, ChangeEvent, useEffect, useState } from 'react';
//services
import servicesDataService from '../../services/services-data.service';
//store
import { useAppDispatch } from '../../utils/hooks';
import { setYearsAction } from '../../store/slices/app-slice';
//variables
import { yearsRangeValuesNames } from '../../variables/variables';
//types
import type { IYearsDataType } from '../../types/store-data-types';
//styles
import './year-range.scss';

const YearRange = (): JSX.Element => {
	const servicesYearsData = servicesDataService.getYears();
	const MIN_VALUE = Math.min(...servicesYearsData);
	const MAX_VALUE = Math.max(...servicesYearsData);
	const RANGE_STEP = 1;

	const dispatch = useAppDispatch();

	const initialRangeState: IYearsDataType = {
		[yearsRangeValuesNames.A]: MIN_VALUE,
		[yearsRangeValuesNames.B]: MAX_VALUE,
	};

	const [rangeValues, setRangeValues] = useState<IYearsDataType>(initialRangeState);

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const et = event.target;

		setRangeValues({
			...rangeValues,
			[et.id]: +et.value,
		});
	};

	useEffect(() => {
		dispatch(setYearsAction({ years: rangeValues }));
	}, [rangeValues]);

	return (
		<div className='year-range'>
			<div
				className='year-range__wrap'
				style={
					{
						'--a': rangeValues.a,
						'--b': rangeValues.b,
						'--min': MIN_VALUE,
						'--max': MAX_VALUE,
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
						min={MIN_VALUE}
						value={rangeValues.a}
						max={MAX_VALUE}
						step={RANGE_STEP}
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
						min={MIN_VALUE}
						value={rangeValues.b}
						max={MAX_VALUE}
						step={RANGE_STEP}
					/>
				</div>
			</div>
		</div>
	);
};

export default YearRange;
