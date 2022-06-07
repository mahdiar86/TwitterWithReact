import Axios from "axios";
import axios from "axios";

// **************************
// https://twitterapi.liara.run/api
// **************************

export const getAxiosInstance = () => {
    return Axios.create({
        baseURL: "http://localhost:3001",
        headers: {
            API_KEY: "sldfjdlkfsdfsdsfdjlsdjfsdljfdsjdslk"
        },
    });
};

export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            // API_KEY: "sldfjdlkfsdfsdsfdjlsdjfsdljfdsjdslk"
        },
    });
};

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            'x-auth-token': localStorage.getItem("x-auth-token")
        }
    });
};