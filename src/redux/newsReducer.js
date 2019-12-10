const SET_NEWS_LIST = 'news-app/news/SET_NEWS_LIST';
const GET_NEWS_LIST = 'news-app/news/GET_NEWS_LIST';
const SET_SOURCES = 'news-app/news/SET_SOURCES';
const GET_SOURCES = 'news-app/news/GET_SOURCES';

let initialState = {
   articles: [],
   sources: []
};

export const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_NEWS_LIST:
         return {
            ...state,
            articles: action.articles
         }
      case SET_SOURCES:
         return {
            ...state,
            sources: action.sources
         }
      default:
         return state;
   }
}

//simple action creator
export const setNewsList = (articles) => ({type: SET_NEWS_LIST, articles});
export const setSources = (sources) => ({type: SET_SOURCES, sources});


//saga action creator
export const getNews = (typeOfRequest, ...titles) => ({type: GET_NEWS_LIST, typeOfRequest, titles});
export const getSources = (...titles) => ({type: GET_SOURCES, titles});
