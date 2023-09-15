import axios from "axios";

import {URL} from "../../src/constant/dataAPI";

// Base URL
const httpsRequre = axios.create({
  baseURL: URL,
});
// interceptor Required

//  interceptor Response
export default httpsRequre;
