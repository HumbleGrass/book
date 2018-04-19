import axios from 'axios'
axios.defaults.baseURL='http://localhost:8898';
axios.interceptors.response.use((res)=>{
    return res.data.result
})
// 获取轮播图接口
export let getSliders=()=>{
    return axios.get('/api/swiper-api')
}
// 获取图书接口
export let getBooks=()=>{
    return axios.get('/api/book-api')
}
export let removebook=(id)=>{
    return axios.delete(`/api/book-api?id=${id}`)
}
export let getDetall=(id)=>{
    return axios.get(`/api/book-api?id=${id}`)
}
export let updatebook=(id,data)=>{
    return axios.put(`/api/book-api?id=${id}`,data)
}
export let addbook=(data)=>{
    return axios.post(`/api/book-api`,data)
}
export let pagetion=(offset)=>{
    return axios.get(`/api/book-api?offset=${offset}`)
}
export let getall=()=>{
    return axios.all([getSliders(),getBooks()])
}