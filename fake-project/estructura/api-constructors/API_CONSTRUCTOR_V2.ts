import axios from "axios";

declare global {
  interface Window {
    _env_: any;
  }
}

export const APIV2 = (url: string | undefined, utilizarJWT: boolean, dispatch: any, utilizarCabeceraTimezone: boolean = true) => {
  const _axios = axios.create({
    baseURL: url,
    headers: utilizarCabeceraTimezone ? { "X-Timezone": Intl.DateTimeFormat().resolvedOptions().timeZone } : {},
    adapter: "fetch",
  });

  _axios.interceptors.response.use(
    (res) => res,
    async (err) => {
      // logica del jwt y refresh token
      return Promise.reject(err);
    },
  );

  _axios.interceptors.request.use(
    (config) => {
      if (utilizarJWT) {
        if (!config.headers.Authorization) {
          let jwt = "getJwtAccesoOLogin();"
          config.headers.Authorization = `Bearer ${jwt}`;
        }
      }
      return config;
    },
    () => Promise.reject(),
  );

  return _axios;
};
