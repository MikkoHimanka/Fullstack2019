import axios from 'axios'
const defaultURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(defaultURL)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(defaultURL, newObject)
    return request.then(response => response.data)
}

const remove = object => {
    const request = axios.delete(`${defaultURL}/${object}`)
    return request.then(response => response.data)
}

const update = (id, object) => {
    const request = axios.put(`${defaultURL}/${id}`, object)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }