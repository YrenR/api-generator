// Copyright © - Metadata S.L. - Todos los Derechos Reservados - Documento Confidencial [CON]
import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
// import { AxiosInstance } from "axios";
import { caeRepository } from "../../../../repositories";
// import asd from "@web-bee-ru/openapi-axios"

type AxiosInstance = OpenApiAxios<caeRepository.paths, "axios">

export class AxiosSingleton_API_CAE {
  private static instance: AxiosInstance | null = null;
  private static apiUrl: string | null = null;

  private constructor() { }

  static getInstance(): AxiosInstance {
    if (!AxiosSingleton_API_CAE.instance) {
      throw new Error("Instancia AxiosSingleton_API_CAE no inicializada. Inicialízala con setInstance");
    }
    return AxiosSingleton_API_CAE.instance;
  }

  static setInstance(instance: AxiosInstance) {
    if (!AxiosSingleton_API_CAE.instance) {
      AxiosSingleton_API_CAE.instance = instance;
    }
  }

  static getApiUrl(): string {
    if (!this.apiUrl) {
      throw new Error("URL de AxiosSingleton_API_CAE no inicializada. Inicialízala con setApiUrl");
    }
    return this.apiUrl;
  }

  static setApiUrl(apiUrl: string) {
    if (!this.apiUrl) {
      this.apiUrl = apiUrl;
    }
  }
}
