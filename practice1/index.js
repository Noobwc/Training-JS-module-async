import getURL from "./utils.js";
import {ADDRESS, REGION, PATH, PORT} from "./constant.js";

let url;
url = getURL(ADDRESS, PORT, PATH);

export {
    url,
    REGION as region
}
