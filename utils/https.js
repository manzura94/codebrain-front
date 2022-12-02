import axios from "axios";
import { baseUrl } from "./urls";

export const authHost = axios.create({
    baseURL: `${baseUrl}`
})

console.log(authHost, 'authHost');