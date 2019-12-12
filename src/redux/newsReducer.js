const SET_NEWS_LIST = 'news-app/news/SET_NEWS_LIST';
const GET_NEWS_SOURCES_LIST = 'news-app/news/GET_NEWS_SOURCES_LIST';
const SET_SOURCES = 'news-app/news/SET_SOURCES';
const GET_SOURCES = 'news-app/news/GET_SOURCES';

const FETCHING = 'news-app/news/FETCHING';

let initialState = {
   articles: [],
   sources: [],
   isFetching: false
};

export const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCHING: 
         return {
            ...state,
            isFetching: !state.isFetching
         }
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
export const setFetching = () => ({type: FETCHING});


//saga action creator
export const getNews = (typeOfRequest, ...titles) => ({type: GET_NEWS_SOURCES_LIST, typeOfRequest, titles});
export const getSources = (typeOfRequest, ...titles) => ({type: GET_SOURCES, typeOfRequest, titles});
