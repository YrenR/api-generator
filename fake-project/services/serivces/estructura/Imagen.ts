import { AxiosSingleton_API_ESTRUCTURA } from "./AxiosSingleton_API_ESTRUCTURA";

// export const createLogoEntidadEstructura = (file: File, idTipoEntidad: any, idEntidad: number) => {
//   let formData = new FormData();
//   formData.append("file", file);
//   formData.append("fileName", file.name);
//   return AxiosSingleton_API_ESTRUCTURA.getInstance()
//     .post(`/${ENDPOINT}/tipo-entidad/${idTipoEntidad}/entidad/${idEntidad}`, formData)
//     .then((res) => res.data);
// };
// TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!! 
export const createLogoEntidadEstructura = (file: File, idTipoEntidad: any, idEntidad: number) => {
  let formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  const params = { idTipoEntidad, idEntidad };
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .post("/estructura/v1/imagen/tipo-entidad/{idTipoEntidad}/entidad/{idEntidad}", undefined, { params, })
    .then(({ data }) => data);
};

export const deleteLogoEntidadEstructura = (idTipoEntidad: any, idEntidad: number) =>
  AxiosSingleton_API_ESTRUCTURA.getInstance()
    .delete("/estructura/v1/imagen/tipo-entidad/{idTipoEntidad}/entidad/{idEntidad}", { params: { idTipoEntidad, idEntidad } })
    .then(({ data }) => data);
