import * as AxiosInstances from "../api-constructors";
import { AxiosSingleton_API_COMUN } from "../../services/serivces/comun/AxiosSingleton_API_COMUN";
import { AxiosSingleton_API_COMUN_PUBLIC } from "../../services/serivces/comun/AxiosSingleton_API_COMUN_PUBLIC";
import { AxiosSingleton_API_CAE } from "../../services/serivces/cae/AxiosSingleton_API_CAE";
import { AxiosSingleton_API_CAE_PUBLIC } from "../../services/serivces/cae/AxiosSingleton_API_CAE_PUBLIC";

export const useInstanciasAxios = () => {
  // CAE
  AxiosSingleton_API_CAE.setInstance(AxiosInstances.API_CAE_V2());
  AxiosSingleton_API_CAE.setApiUrl(AxiosInstances.getAPI_CAE_URL());
  AxiosSingleton_API_CAE_PUBLIC.setInstance(AxiosInstances.API_CAE_PUBLIC_V2());
  AxiosSingleton_API_CAE_PUBLIC.setApiUrl(AxiosInstances.getAPI_CAE_URL());

  // COMUN
  AxiosSingleton_API_COMUN.setInstance(AxiosInstances.API_COMUN_V2());
  AxiosSingleton_API_COMUN.setApiUrl(AxiosInstances.getAPI_COMUN_URL());
  AxiosSingleton_API_COMUN_PUBLIC.setInstance(AxiosInstances.API_COMUN_PUBLIC_V2());
  AxiosSingleton_API_COMUN_PUBLIC.setApiUrl(AxiosInstances.getAPI_COMUN_URL());
};
