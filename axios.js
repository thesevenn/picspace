import axios from "axios";
import { REACT_APP_BASE_URL, REACT_APP_SOURCE_API } from '@env';

export const request = axios.create( {
    baseURL: REACT_APP_BASE_URL,
    headers: {
        Authorization: `Client-ID ${REACT_APP_SOURCE_API}`,
        AcceptVersion: "v1"
    }
} );