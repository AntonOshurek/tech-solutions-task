import React from 'react';
import { createRoot } from 'react-dom/client';
//components
import App from './app/App';
//styles
import './variables/variables.css';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
