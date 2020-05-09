import {Actions} from "../actions/login-actions";

export interface IState {
    isLoggedIn: boolean;
}
const defaultState: IState = {
    isLoggedIn: false,
};

export default function loginReducer(state = defaultState, action: any) {
    switch (action.type) {
        case Actions.REQUEST_LOGIN:
            return {
                ...state,
            };
        case `${Actions.REQUEST_LOGIN}_SUCCESS`:
            return {
                ...state,
                isLoggedIn: true,
            };
        case `${Actions.REQUEST_LOGIN}_FAILURE`:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state
    }
}