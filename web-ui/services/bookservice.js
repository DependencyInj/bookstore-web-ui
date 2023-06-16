import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8090';

export async function getRequest(url){
    const resp = await axiosClient.get(url)
    .then(response => response)
    .catch(error => console.log(error));

    return resp?.data;
}

export async function deleteBook(url, id){
    const data =  {"bookId": id};

    await axiosClient.post(url, data)
    .then(response => response)
    .catch(error => console.log(error));

}