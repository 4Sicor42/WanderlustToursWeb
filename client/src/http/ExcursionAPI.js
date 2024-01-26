import {$authHost, $host} from "./index";



export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchExcursions = async (limit) => {
    const {data} = await $host.get('api/excursion', {params: {limit}})
    return data
}

export const fetchHistory = async (userId) => {
    const {data} = await $host.get('api/history/'+ userId)
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
