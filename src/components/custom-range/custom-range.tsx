import { CSSProperties, ChangeEvent, useState } from 'react';
//styles
import './custom-range.scss';

const enum rangeValuesNames {
	A = 'a',
	B = 'b',
}

interface IRangeValuesStateType {
	[rangeValuesNames.A]: number;
	[rangeValuesNames.B]: number;
}

const CustomRange = (): JSX.Element => {
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
		<div className='custom-range'>
			<div
				className='custom-range__wrap'
				style={
					{
						'--a': rangeValues.a,
						'--b': rangeValues.b,
						'--min': MIN_VALUE,
						'--max': MAX_VALUE,
					} as CSSProperties
				}
			>
				<h3>Wybierz rok</h3>

				<div className='range-set'>
					<label className='label label-a' htmlFor='a' aria-label='Первое значение диапазона'>
						Od
					</label>
					<output className='output output-a' name='a' htmlFor='a'>
						{rangeValues.a}
					</output>
					<input
						onInput={handleInput}
						className='range-input range-input-a'
						id={rangeValuesNames.A}
						name='price-range'
						type='range'
						min={MIN_VALUE}
						value={rangeValues.a}
						max={MAX_VALUE}
						step={RANGE_STEP}
					/>
					<label className='label label-b' htmlFor='b' aria-label='Второе значение диапазона'>
						Do
					</label>
					<output className='output output-b' name='b' htmlFor='b'>
						{rangeValues.b}
					</output>
					<input
						onInput={handleInput}
						className='range-input range-input-b'
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

export default CustomRange;
