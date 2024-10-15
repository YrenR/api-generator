import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
import { APIV2 } from "./API_CONSTRUCTOR_V2";
import { caeRepository } from "../../../repositories";

const url = "http://localhost:9083/cae/v1/"; // .env

/**
 * Crea la instancia de axios con la ruta del microsevicio correspondiente al servicio
 *
 * En caso de querer hacer una peticion con un JWT sobreescrito, hay que pasarlo como parametro
 *
 * @param dispatch
 * @returns Instancia de axios para hacer peticiones al servicio de calendarios
 */
export const API_CAE_V2 = (dispatch?: any) => {
  const initializeAPIV2 = APIV2(url, true, dispatch);
  return new OpenApiAxios<caeRepository.paths, "axios">(initializeAPIV2, { validStatus: "axios" });
};

export const API_CAE_PUBLIC_V2 = (dispatch?: any) => {
  const initializeAPIV2 = APIV2(url, false, dispatch);
  return new OpenApiAxios<caeRepository.paths, "axios">(initializeAPIV2, { validStatus: "axios" });
};

export const getAPI_CAE_URL = () => url;
