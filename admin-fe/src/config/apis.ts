import env from "./env";

enum WebUrl {
    LOCAL = "http://localhost:3000",
    UAT = "https://refynetest.firebaseapp.com",
    PROD = "https://beta.refyne.co.in",
}
enum ApiUrl {
    LOCAL = "http://localhost:9000",
    PROD = "https://api.beta.refyne.co.in:9000",
    UAT = "http://localhost:9000",
}
export const baseUrl = ApiUrl[env];
export const webUrl = WebUrl[env];