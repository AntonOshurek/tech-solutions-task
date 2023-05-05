//services
import servicesDataService from '../../../services/services-data.service';
//types
import type { ICheckedServiceDataType } from '../../../types/data-types';
import type { ServicesItemsType } from '../../../types/services-data-types';
//styles
import './selected-services.scss';

interface ISelectedServicesPropsType {
	currentServices: string[];
}

const SelectedServices = ({ currentServices }: ISelectedServicesPropsType): JSX.Element => {
	const servicesItems = servicesDataService.getServices();

	const itemsForShow: ServicesItemsType = [];

	currentServices.map((itemName) => {
		const findedItem = servicesItems.find((item) => item.id === itemName);
		findedItem ? itemsForShow.push(findedItem) : null;
	});

	return (
		<article className='selected-services'>
			<h3 className='selected-services__title'>Wybrane serwisy</h3>

			<ul className='selected-services__list'>
				{itemsForShow.map((item) => (
					<li className='selected-services__item' key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		</article>
	);
};

export default SelectedServices;
