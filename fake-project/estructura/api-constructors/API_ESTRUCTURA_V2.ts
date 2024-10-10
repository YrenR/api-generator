// Copyright © - Metadata S.L. - Todos los Derechos Reservados - Documento Confidencial [CON]
// import { Dispatch } from "@reduxjs/toolkit";
import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
import { APIV2 } from "./API_CONSTRUCTOR_V2";
import { comunRepository } from "../../../repositories";
// import { VariablesEntorno } from "../..";

const url = "http://localhost:9082/estructura/v1/"; // .env

/**
 * Crea la instancia de axios con la ruta del microsevicio correspondiente al servicio
 *
 * En caso de querer hacer una peticion con un JWT sobreescrito, hay que pasarlo como parametro
 *
 * @param dispatch
 * @returns Instancia de axios para hacer peticiones al servicio de estructura
 */
export const API_ESTRUCTURA_V2 = (dispatch: any) => {
  const initializeAPIV2 = APIV2(url, true, dispatch);
  return new OpenApiAxios<comunRepository.paths, "axios">(initializeAPIV2, { validStatus: "axios" });
};

export const getAPI_ESTRUCTURA_URL = () => url;
