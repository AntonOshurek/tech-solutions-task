//components
import { CustomRange, ServicesList } from '../../components';
//styles
import './services-page.scss';

const ServicesPage = (): JSX.Element => {
	return (
		<div className='services-page'>
			<main className='services-page__main container'>
				<h1>Choice your service</h1>

				<CustomRange />

				<ServicesList />

				<section className='choice-result'></section>

				<button type='button'>submit</button>
			</main>
		</div>
	);
};

export default ServicesPage;
