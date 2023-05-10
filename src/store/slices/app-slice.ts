import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appStoreData } from '../store-data/app-store-data';
//types
import type {
	ISetYearsActionType,
	ISetServicesActionType,
	ISetPackageActionType,
} from '../../types/actions-types';
import type { AppThunk } from '../../types/store-types';

export const appSlice = createSlice({
	name: 'app',
	initialState: appStoreData,

	reducers: {
		setServices: (state, action: PayloadAction<ISetServicesActionType>) => {
			const { services } = action.payload;
			state.services = services;
		},
		setPackage: (state, action: PayloadAction<ISetPackageActionType>) => {
			const { pack } = action.payload;
			state.pack = pack;
		},
		setYearsRange: (state, action: PayloadAction<ISetYearsActionType>) => {
			const { years } = action.payload;
			state.yearsRange = years;
		},
	},
});

// export const { setServices, setPackage, setYearsRange } = appSlice.actions;

export const setServicesAction =
	(action: ISetServicesActionType): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setServices(action));
	};

export const setPackageAction =
	(action: ISetPackageActionType): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setPackage(action));
	};

export const setYearsRangeAction =
	(action: ISetYearsActionType): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setYearsRange(action));
	};

export default appSlice.reducer;
