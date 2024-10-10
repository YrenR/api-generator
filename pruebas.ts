import { OpenApiAxios } from "@web-bee-ru/openapi-axios";
import type { comunRepository } from "./repositories";
import Axios from "axios";

const axios = Axios.create({
	baseURL: "localhost",
	adapter: "fetch",
});

const api = new OpenApiAxios<comunRepository.paths, "axios">(axios, { validStatus: "axios" });

const fetchEmpresa = api.get("/comun/v1/empresas/{idEmpresa}", { params: { idEmpresa: 1 } })

fetchEmpresa.then((res) => {
	console.log(res.data);
}).catch((err) => {
	console.error(err);
});

const { data, response, status } = await api.get("/comun/v1/autonomos/{idEmpresa}", { params: { idEmpresa: 1 } })

// capa services
api.get("/comun/v1/tipos-documentos-informatizados/{idTipoDocumentoInformatizado}", { params: { idTipoDocumentoInformatizado: 1 } })

// el wrapper en el hook
