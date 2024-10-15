// import { IdiomaGetDAO } from "../../modelo/comun/IdiomaGetDAO";
import { AxiosSingleton_API_COMUN_PUBLIC } from "./AxiosSingleton_API_COMUN_PUBLIC";

// export const getAllIdiomas = () => {
//   return new Promise((resolve, reject) => {
//     AxiosSingleton_API_COMUN_PUBLIC.getInstance()
//       .get("/comun/v1/idiomas")
//       .then(({ data }) => resolve(data))
//       .catch(reject);
//   });
// };

export const getAllIdiomas = () => {
  return AxiosSingleton_API_COMUN_PUBLIC.getInstance()
    .get("/comun/v1/idiomas")
    .then(({ data }) => data);
};
