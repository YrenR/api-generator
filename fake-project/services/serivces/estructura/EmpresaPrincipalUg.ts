import { estructuraRepository } from "../../../../repositories";
import { AxiosSingleton_API_ESTRUCTURA } from "./AxiosSingleton_API_ESTRUCTURA";

/**
 * Busca las Ugs de una EmpresaPrincipal a partir de unos filtros
 * @param idEmpresa
 * @param opt
 */
export const getAllUgs = (
  idEmpresa: number,
  query?: estructuraRepository.operations["getUgsPorIdEmpresa"]["parameters"]["query"],
) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .get("/estructura/v1/empresas-principales/{idEmpresa}/ugs", { params: { idEmpresa }, query })
    .then(({ data }) => data);
};

export const deleteUg = (idEmpresa: number, idUg: number) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .delete("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}", { params: { idEmpresa, idUg } })
    .then(() => "UgService.deleteUg() -> Done");
};

/**
 * Recoge una lista de las relaciones entre una Ug y Uts y
 * posteriormente se crearan/eliminara dicha relacion
 * @param idUg as number
 * @param utChecked as Number[], arrays de idUt
 * @param utUnchecked as Number[], arrays de idUt
 */
export const saveUgRelUtsByIds = (
  idEmpresa: number,
  idUg: number,
  listaUTs: estructuraRepository.SchemaRequestBodyDobleListaInteger,
) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .post("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}/uts", listaUTs, { params: { idEmpresa, idUg } })
    .then(({ data }) => data,);
};

export const updateUgSinRelaciones = (idEmpresaPrincipal: number, idUg: number, ugData: estructuraRepository.SchemaUgDtoPut) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .put("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}", ugData, { params: { idEmpresa: idEmpresaPrincipal, idUg } })
    .then(({ data }) => data);
};
