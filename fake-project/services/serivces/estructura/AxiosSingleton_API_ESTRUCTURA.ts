// import { AxiosInstance } from "axios";

import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
import { estructuraRepository } from "../../../../repositories";

type AxiosInstance = OpenApiAxios<estructuraRepository.paths, "axios">

export class AxiosSingleton_API_ESTRUCTURA {
  private static instance: AxiosInstance | null = null;
  private static apiUrl: string | null = null;

  private constructor() { }

  static getInstance(): AxiosInstance {
    if (!AxiosSingleton_API_ESTRUCTURA.instance) {
      throw new Error("Instancia AxiosSingleton_API_ESTRUCTURA no inicializada. Inicialízala con setInstance");
    }
    return AxiosSingleton_API_ESTRUCTURA.instance;
  }

  static setInstance(instance: AxiosInstance) {
    if (!AxiosSingleton_API_ESTRUCTURA.instance) {
      AxiosSingleton_API_ESTRUCTURA.instance = instance;
    }
  }

  static getApiUrl(): string {
    if (!this.apiUrl) {
      throw new Error("URL de AxiosSingleton_API_ESTRUCTURA no inicializada. Inicialízala con setApiUrl");
    }
    return this.apiUrl;
  }

  static setApiUrl(apiUrl: string) {
    if (!this.apiUrl) {
      this.apiUrl = apiUrl;
    }
  }
}
