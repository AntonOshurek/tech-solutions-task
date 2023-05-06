import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appStoreData } from '../store-data/app-store-data';
//types
import type { ISetYearsActionType, ISetServicesActionType } from '../../types/actions-types';
import type { AppThunk } from '../../types/store-types';

export const appSlice = createSlice({
	name: 'app',
	initialState: appStoreData,

	reducers: {
		setServices: (state, action: PayloadAction<ISetServicesActionType>) => {
			const { services } = action.payload;
			state.services = services;
		},
		setYears: (state, action: PayloadAction<ISetYearsActionType>) => {
			const { years } = action.payload;
			state.yearsRange = years;
		},
	},
});

export const { setServices, setYears } = appSlice.actions;

export const setServicesAction =
	(action: ISetServicesActionType): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setServices(action));
	};

export const setYearsAction =
	(action: ISetYearsActionType): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setYears(action));
	};

export default appSlice.reducer;
