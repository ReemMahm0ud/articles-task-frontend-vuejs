import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default {
    getArticles(){
        return apiClient.get('/getALLarticles')
    },
    show (id){
        return apiClient.get('/articleByID/'+id)
    },
    update (id,data){
        return apiClient.put('/updateArticle/'+id,data)
    },
    create (data){
        return apiClient.post('/addArticle',data)
    },
    delete (id){
        return apiClient.delete('/deleteArticle/'+id)
    }
}

