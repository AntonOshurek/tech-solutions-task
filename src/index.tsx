import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//components
import App from './app/App';
//store
import { store } from './store/store';
//styles
import './variables/variables.css';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
