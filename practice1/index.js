import getURL from "./utils";
import {ADDRESS, REGION, PATH, PORT} from "./constant";

let url;
url = getURL(ADDRESS, PORT, PATH);

export {
    url,
    REGION as region
}
