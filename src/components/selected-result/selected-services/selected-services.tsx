//types
import type { ServicesItemsType } from '../../../types/services-data-types';
//styles
import './selected-services.scss';

interface ISelectedServicesPropsType {
	selectedServices: ServicesItemsType;
}

const SelectedServices = ({ selectedServices }: ISelectedServicesPropsType): JSX.Element => {
	return (
		<article className='selected-services'>
			<h3 className='selected-services__title'>Wybrane serwisy</h3>

			<ul className='selected-services__list'>
				{selectedServices.map((item) => (
					<li className='selected-services__item' key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		</article>
	);
};

export default SelectedServices;
