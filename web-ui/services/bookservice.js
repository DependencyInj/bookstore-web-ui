import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8090';

export async function getRequest(url){
    const resp = await axiosClient.get(url)
    .then(response => response)
    .catch(error => console.log(error));

    return resp.data;
}