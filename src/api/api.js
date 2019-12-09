import * as axios from "axios";


const instance = axios.create({
   baseURL: 'https://newsapi.org/v2/',
})


export const newsAPI = {
   getTopNewsList(request) {
      return instance.get(`top-headlines?${request}&apiKey=871fa6f8f31d4dd0a89793d18e19fd82`)
   },
   getEverythingNewsList(request) {
      return instance.get(`top-headlines?${request}&apiKey=871fa6f8f31d4dd0a89793d18e19fd82`)
   },
}