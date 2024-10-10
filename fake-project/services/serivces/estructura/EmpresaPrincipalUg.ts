// Copyright © - Metadata S.L. - Todos los Derechos Reservados - Documento Confidencial [CON]
import { AxiosSingleton_API_ESTRUCTURA } from "./AxiosSingleton_API_ESTRUCTURA";

/**
 * Busca las Ugs de una EmpresaPrincipal a partir de unos filtros
 * @param idEmpresa
 * @param opt
 */
export const getAllUgs = (
  idEmpresa: number,
  opt?: {
    idTipoUg?: number;
    idUgPadre?: number;
    listaIds?: number[];
    modoArbol?: boolean;
    nivel?: number;
    obtenerInterna?: boolean;
    idTipoEstructura?: number;
  },
) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .get("/estructura/v1/empresas-principales/{idEmpresa}/ugs", { params: { idEmpresa }, query: opt })
    .then(({ data }) => data);
};

export const deleteUg = (idEmpresaPrincipal: number, idUg: number) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .delete("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}", { params: { idEmpresa: idEmpresaPrincipal, idUg } })
    .then(() => "UgService.deleteUg() -> Done");
};

/**
 * Recoge una lista de las relaciones entre una Ug y Uts y
 * posteriormente se crearan/eliminara dicha relacion
 * @param idUg as number
 * @param utChecked as Number[], arrays de idUt
 * @param utUnchecked as Number[], arrays de idUt
 */
// TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!!  // TODO: !!BORRAR!! 
export const saveUgRelUtsByIds = (
  idEmpresa: number,
  idUg: number,
  listaUTs: {
    listadoEliminar: number[];
    listadoInsertar: number[];
  },
) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .post("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}/uts", undefined, { params: { idEmpresa, idUg } })
    .then(({ data }) => data,);
};

export const updateUgSinRelaciones = (idEmpresaPrincipal: number, idUg: number, ugData: any) => {
  return AxiosSingleton_API_ESTRUCTURA.getInstance()
    .put("/estructura/v1/empresas-principales/{idEmpresa}/ugs/{idUg}", undefined, { params: { idEmpresa: idEmpresaPrincipal, idUg } })
    .then(({ data }) => data);
};
