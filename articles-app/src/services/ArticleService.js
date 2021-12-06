import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
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

