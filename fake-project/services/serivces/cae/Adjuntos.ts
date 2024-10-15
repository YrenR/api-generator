import { AxiosSingleton_API_CAE } from "./AxiosSingleton_API_CAE";

export const eliminarArchivoByIdArchivo = (params: { idArchivo: number }) => {
  return AxiosSingleton_API_CAE.getInstance()
    .delete("/cae/v1/adjuntos/{idArchivo}", { params })
    .then(({ data }) => data);
};
