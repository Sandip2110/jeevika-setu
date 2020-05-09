import axios from "axios";
// import {IActions} from "../models";
import {baseUrl} from "../config/apis";
import store from "../store";

export const idTokenName = "storageName";

export function saveToken(idToken: string) {
    window.localStorage.setItem(idTokenName, idToken);
}
export function getToken() {
    return window.localStorage.getItem(idTokenName);
}

function getHeader(base64Str: string, authType?: string) {
    return {
        'Content-Type': "application/json",
        "Authorization": `${authType ? authType : "Bearer"} ${base64Str}`,
    }
}

export default async function dispatch(actionDetails: any) {
    let splitActionName = actionDetails.actionName.split("_");
    store.dispatch({type: actionDetails.actionName, payload: actionDetails.body});
    if (splitActionName[0] === "REQUEST") {
        try {
            let response: any = undefined;
            if (actionDetails.type === "GET") {
                response = await axios.get(`${baseUrl}${actionDetails.url}`,
                    {headers: getHeader(actionDetails.token ? actionDetails.token : getToken(), actionDetails.authType),
                           timeout: 30000
                           }
                );

            } else if (actionDetails.type === "POST") {
                response = await axios.post(`${baseUrl}${actionDetails.url}`, actionDetails.body,
                            {headers: getHeader(actionDetails.token ? actionDetails.token : getToken(), actionDetails.authType),
                                   timeout: 30000
                                   }
                );
            }
            if (response && (response.status === 200 || response.status === 204)) {
                store.dispatch({type: `${actionDetails.actionName}_SUCCESS`, payload: response.data});
            } else {
                return Promise.reject(response);
            }
        } catch (error) {
            store.dispatch({type: `${actionDetails.actionName}_FAILURE`, payload: error.data});
        }
    }
}
