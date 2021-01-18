// Neste arquivo temos a importação da confguração do axios (api/config) e 
// é realizado os endpoints do backend, para encaminhamento.
// Todos os métodos vão de acordo com os objetos e caminhos requeridos lá configurados no backend

import {backendHost} from '../api/config.js' // Para pegar a url padrão conforme a plataforma

export default{
    list: () => {
        return backendHost.get(backendHost +'vehicles')
    },
    listById: (uuid) => {
        return backendHost.get('vehicles/' + uuid)
    },
    create:(vehicle) => {
        return backendHost.post('vehicles', vehicle)
    },
    update:(uuid, vehicle) => {
        return backendHost.put('vehicles/' + uuid, vehicle)
    },
    delete:(uuid) => {
        return backendHost.delete('vehicles/', uuid)
    }
}