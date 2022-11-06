import React from 'react'
import axios from 'axios';

export const API = axios.create({
    baseURL: "https://api.v2.kontenbase.com/query/api/v1/2955025a-2cfb-4b74-bb9e-c3bfb624c48b/",
  });

  export const setAuthToken = (token) => {
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.commin["Authorization"];
    }
  };