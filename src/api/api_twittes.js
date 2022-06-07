import Axios from "axios";
import { getAxiosInstance, getAxiosInstanceApi } from "./api";

export const getAllTwittes = (callback) => {
  getAxiosInstanceApi().post("getAllTweet")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

export const getTwitteByHashtags = (hashTag , callback) => {
  getAxiosInstanceApi().post("getAllTweet", {hashTag})
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};

export const getTwittesByUser = (user, callback) => {
  getAxiosInstanceApi().post("getAllTweet", {user})
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error);
  })
};


export const getHashTags = (callback) => {
  getAxiosInstanceApi()
    .get("/getAllHashTags")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsers = (callback) => {
  getAxiosInstanceApi()
    .get("/getAllUser")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const newTwitteRequest = (data,callback) => {
  getAxiosInstanceApi()
    .post("newTweet", data)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      callback(false, error);
    });
};
