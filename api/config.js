// Arquivo de configuração do axios.

let backendHost = ''

const applicationProfile = process.env.NODE_ENV

switch(applicationProfile){
    case 'development':
        backendHost = "http://localhost:8080"
        break
    case 'heroku':
        backendHost = "https://crud-ps-rental-vehic-backend.herokuapp.com/"
        break
}