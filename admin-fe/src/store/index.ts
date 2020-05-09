import {createStore, compose} from 'redux';
import { createHashHistory } from "history";
import rootReducer from "../reducers";
import env, {Env} from "../config/env";

export const history = createHashHistory({
    basename: "/",
});
function configureStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        compose(env !== Env.PROD ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() : undefined)
    );
}
const store = configureStore({});
export default  store;