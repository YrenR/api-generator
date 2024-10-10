import { comunRepository } from "../../../../repositories";
import { AxiosSingleton_API_COMUN } from "./AxiosSingleton_API_COMUN";

const ENDPOINT = "empresas/";

//#region GET
// export const obtenerEmpresas = (queryParams: {
//   CIF?: string;
//   infoEntornos?: boolean;
//   listaIds?: number[];
//   listaIdsPais?: number[];
//   listaModulos?: Modulos.TModulosUsuarios_back_comunicaciones[];
// }): Promise<EmpresaEntornosDAO[]> =>
//   new Promise<EmpresaEntornosDAO[]>((resolve, reject) => {
//     AxiosSingleton_API_COMUN.getInstance()
//       .get(`${ENDPOINT}${rellenarPathConParametros(queryParams)}`)
//       .then((res) => resolve(res.data))
//       .catch(reject);
//   });

export const obtenerEmpresas = (queryParams: {
  CIF?: string;
  infoEntornos?: boolean;
  listaIds?: number[];
  listaIdsPais?: number[];
  listaModulos?: any[];
}) => {
  return AxiosSingleton_API_COMUN.getInstance()
    .get("/comun/v1/empresas", { query: queryParams })
    .then(({ data }) => data)
};

export const obtenerEmpresaPorId = (idEmpresa: number) => {
  AxiosSingleton_API_COMUN.getInstance().post("/comun/v1/empresas/{idEmpresa}/logotipo")
  return AxiosSingleton_API_COMUN.getInstance()
    .get("/comun/v1/empresas/{idEmpresa}", { params: { idEmpresa } })
    .then(({ data }) => data);
};

// export const getURlLogoEmpresaByUuid = (idEmpresa: number, uuid: string, size: "small" | "match_parent" | "large"): string => {
//   const pixels = {
//     small: 24,
//     large: 125,
//   };

//   const sizeString = size !== "match_parent" ? `?alto=${pixels[size]}&ancho=${pixels[size]}&modoMiniaturizacion=REESCALADO` : "";

//   return `${AxiosSingleton_API_COMUN.getApiUrl()}${ENDPOINT}${idEmpresa}/logotipo/${uuid}${sizeString}`;
// };

export const getURlLogoEmpresaByUuid = (idEmpresa: number, uuid: string, size: "small" | "match_parent" | "large") => {
  const pixels = { small: 24, large: 125, };

  const params = { idEmpresa, uuid };
  const query = size !== "match_parent" ? { alto: pixels[size], ancho: pixels[size], modoMiniaturizacion: comunRepository.FormatoEnum.REESCALADO } : {};

  return AxiosSingleton_API_COMUN.getInstance().getUri("get", "/comun/v1/empresas/{idEmpresa}/logotipo/{uuid}", { params, query });
};
