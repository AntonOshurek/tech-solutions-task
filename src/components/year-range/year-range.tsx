import { CSSProperties, ChangeEvent, useState } from 'react';
//styles
import './year-range.scss';

const enum rangeValuesNames {
	A = 'a',
	B = 'b',
}

interface IRangeValuesStateType {
	[rangeValuesNames.A]: number;
	[rangeValuesNames.B]: number;
}

const YearRange = (): JSX.Element => {
	const MIN_VALUE = 2020;
	const MAX_VALUE = 2025;
	const RANGE_STEP = 1;

	const initialRangeState: IRangeValuesStateType = {
		[rangeValuesNames.A]: MIN_VALUE,
		[rangeValuesNames.B]: MAX_VALUE,
	};

	const [rangeValues, setRangeValues] = useState<IRangeValuesStateType>(initialRangeState);

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const et = event.target;

		setRangeValues({
			...rangeValues,
			[et.id]: +et.value,
		});
	};

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
						id={rangeValuesNames.A}
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
						id={rangeValuesNames.B}
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
