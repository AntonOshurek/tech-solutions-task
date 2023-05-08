//components
import { YearRange, ServicesList, SelectedResultat, PackagesList } from '../../components';
//styles
import './services-page.scss';

const ServicesPage = (): JSX.Element => {
	return (
		<div className='services-page'>
			<main className='services-page__main container'>
				<h1>Choice your service</h1>

				<YearRange />

				<PackagesList />

				<ServicesList />

				<SelectedResultat />

				<button className='services-page__submit-button' type='button'>
					Zamów usługi
				</button>
			</main>
		</div>
	);
};

export default ServicesPage;
