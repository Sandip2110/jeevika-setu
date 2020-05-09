export enum Env {
    LOCAL = "LOCAL",
    UAT = "UAT",
    PROD = "PROD",
}

const processEnv = (process.env.REACT_APP_API_ENV === "PROD" || process.env.REACT_APP_API_ENV === "LOCAL")
                    ? process.env.REACT_APP_API_ENV : "UAT";
const env: Env = Env[processEnv];
export default env;