//types
import { IPackageType } from '../../../types/data-types';
//styles
import './selected-package.scss';

interface ISelectedPackagePropsType {
	selectedPackage: IPackageType;
}

const SelectedPackage = ({ selectedPackage }: ISelectedPackagePropsType): JSX.Element => {
	return (
		<article className='selected-services'>
			<div className='selected-services__header'>
				<h3 className='selected-services__package-name'>{selectedPackage.name}</h3>
				<p className='selected-services__title'>Wybrany pakiet usług</p>
			</div>
		</article>
	);
};

export default SelectedPackage;
