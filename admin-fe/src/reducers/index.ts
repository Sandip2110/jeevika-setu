import { combineReducers } from 'redux';
import login, {IState as ILoginState} from "./login-reducer";

export interface IReduxState {
    login: ILoginState,
}

export default combineReducers<IReduxState>({
    login: login,
});