import {$authHost, $host} from "./index";

import { jwtDecode } from "jwt-decode";

export const registration = async (name, lastname, email, phone, password) => {
    const {data} = await $host.post('api/user/registration', {name, lastname, email, phone, password, role: 'user'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const update = async (name, email,phone,address,date,password,id,role) => {
    const {data} = await $host.put(`/api/user/${id}`, {name, email,phone,address,date,password,role})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => { 
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  
    const { data } = await $authHost.get('api/user/auth', config);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }