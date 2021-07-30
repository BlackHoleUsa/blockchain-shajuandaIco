import { CONNECT_META_MASK, BUY_COIN, SET_USER_BALANCE } from '../types/types';

import { initialState } from './state';

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

	switch (type) {

        case CONNECT_META_MASK: {
			const { connection, address } = payload; 

			return {
				...state,
				connection,
				address
			};
		}

		case SET_USER_BALANCE: {
			return {
				...state,
				userBalance: parseFloat(parseInt(payload) / 1E18).toFixed(1)
			}
		}

		case BUY_COIN: {
			return {
				...state,
				// logic here
			}
		}
        
		default:
			return state;

    }

};