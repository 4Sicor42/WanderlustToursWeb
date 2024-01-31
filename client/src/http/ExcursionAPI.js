import {$authHost, $host} from "./index";


export const createExcursion = async (excursion) => {
    const formData = new FormData();
    formData.append('img', excursion.img);
    formData.append('name', excursion.name);
    formData.append('country', excursion.country);
    formData.append('date', excursion.date);
    formData.append('count', excursion.count);
    formData.append('price', excursion.price);
    formData.append('manager', excursion.manager);
    formData.append('adress', excursion.adress);
    formData.append('average_rating', excursion.average_rating);
    formData.append('overview', excursion.overview);

    const { data } = await $authHost.post('api/excursion', formData);
    return data;
};


export const fetchHistory = async (userId) => {
    const {data} = await $host.get('api/history/'+ userId)
    return data
}

export const fetchExcursions = async (limit) => {
    const {data} = await $host.get('api/excursion', {params: {limit}})
    return data
}

export const bookExcursion = async (userId,excursionId,meet,code,name) => {

     const { data } = await $authHost.post(`api/history/${userId}`, {
        excursionId,
        meet,
        code,
        name
    });
    return data
}
