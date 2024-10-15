import { caeRepository } from "../../../../repositories";
import { AxiosSingleton_API_CAE } from "./AxiosSingleton_API_CAE";

export const postUtsRelActividad = (idActividad: number, listaUtRelActividad: caeRepository.SchemaRequestBodyTripleListaObjetoUtActividadDtoRequestUtDto) => {
	return AxiosSingleton_API_CAE.getInstance()
		.post("/cae/v1/actividades/{idActividad}/uts", listaUtRelActividad, { params: { idActividad } })
		.then(({ data }) => data);
};