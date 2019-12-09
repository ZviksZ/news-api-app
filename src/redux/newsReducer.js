import {newsAPI} from "../api/api.js";


const GET_NEWS_LIST = 'news-app/news/GET_NEWS_LIST';

let initialState = {
   articles: []
};

export const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_NEWS_LIST:
         return {
            ...state,
            articles: action.articles
         }     
      default:
         return state;
   }
}

export const getNewsList = (articles) => ({type: GET_NEWS_LIST, articles})

export const requestNews = (typeOfRequest, ...titles) => async (dispatch) => {  
   const request = titles.join('&')
   let response = await newsAPI.getTopNewsList(typeOfRequest, request).then(response => response.data);
   
   console.log(response)
   
   if (response.status === 'ok') {
      dispatch(getNewsList(response.articles))
   }

}