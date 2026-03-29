import axios from 'axios'

//npx json-server db.json
export const api = axios.create({
    baseURL: 'http://localhost:3000'
}) 