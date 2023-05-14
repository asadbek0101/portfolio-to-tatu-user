import axios from "axios";

export const request = axios.create({
    baseURL: "https://jarvis-jon.uz:8443/api/v1/"
    // baseURL: "http://16.16.171.16:8080/api/v1/"
})