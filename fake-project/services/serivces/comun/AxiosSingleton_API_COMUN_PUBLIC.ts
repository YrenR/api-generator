// import { AxiosInstance } from "axios";

import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
import { comunRepository } from "../../../../repositories";

type AxiosInstance = OpenApiAxios<comunRepository.paths, "axios">

export class AxiosSingleton_API_COMUN_PUBLIC {
  private static instance: AxiosInstance | null = null;
  private static apiUrl: string | null = null;

  private constructor() { }

  static getInstance(): AxiosInstance {
    if (!AxiosSingleton_API_COMUN_PUBLIC.instance) {
      throw new Error("Instancia AxiosSingleton_API_COMUN_PUBLIC no inicializada. Inicialízala con setInstance");
    }
    return AxiosSingleton_API_COMUN_PUBLIC.instance;
  }

  static setInstance(instance: AxiosInstance) {
    if (!AxiosSingleton_API_COMUN_PUBLIC.instance) {
      AxiosSingleton_API_COMUN_PUBLIC.instance = instance;
    }
  }

  static getApiUrl(): string {
    if (!this.apiUrl) {
      throw new Error("URL de AxiosSingleton_API_COMUN_PUBLIC no inicializada. Inicialízala con setApiUrl");
    }
    return this.apiUrl;
  }

  static setApiUrl(apiUrl: string) {
    if (!this.apiUrl) {
      this.apiUrl = apiUrl;
    }
  }
}
