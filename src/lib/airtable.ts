import axios, { AxiosInstance } from "axios";

const TABLE_ID = `appFcabQuVjmhCKD2`;

const airtable: AxiosInstance = axios.create({
  baseURL: import.meta.env.PROD
    ? `https://hc-caching-proxy.herokuapp.com/airtable/${TABLE_ID}`
    : `https://api.airtable.com/v0/${TABLE_ID}`,
  headers: import.meta.env.DEV
    ? { Authorization: `Bearer key1XrFuYhG1GKHvu` }
    : undefined,
});

export default airtable;
