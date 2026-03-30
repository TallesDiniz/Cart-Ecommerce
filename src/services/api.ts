import axios from 'axios'

//npx json-server db.json
export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/TallesDiniz/Cart-Ecommerce'
}) 