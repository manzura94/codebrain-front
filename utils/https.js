import axios from "axios";
import { baseUrl, refresh } from "./urls";

export const authHost = axios.create({
    baseURL: `${baseUrl}`
})

authHost.interceptors.request.use(
    (config) => {
      const accessToken = typeof window !== 'undefined' && localStorage.getItem("accessToken");
  
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  )


authHost.interceptors.response.use((response) => {
    const originalRequest = response.config;
    let refreshToken = typeof window !== 'undefined' &&  localStorage.getItem("refreshToken");
    let id = typeof window !== 'undefined' &&  localStorage.getItem("id");
    console.log(response,'%c', 'tushdimi', 'background: #222; color: #bada55')
    if (
      refreshToken &&
      response.data.code === 400 &&
      response.data.error === "JWT_EXPIRED"  &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return authHost
        .post(refresh, {
          refreshToken,
          id,
        })
        .then(({data}) => { 
          console.log(data, 'ssssssssss')
           return data})
        .then(({data, error}) => {
          if(error){
            localStorage.clear()
            console.log(error)
            window.location.reload()
          }
          const { accessToken } = data;
          console.log(accessToken , 'yyyyyyyyyyyyyyyyyyyyyyyyyyy')
            localStorage.setItem("accessToken",accessToken );
            console.log("Access token refreshed!");
            return authHost(originalRequest);
        });
    } else return response;
  });