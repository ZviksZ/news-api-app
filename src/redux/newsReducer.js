const SET_NEWS_LIST = 'news-app/news/SET_NEWS_LIST';
const GET_NEWS_LIST = 'news-app/news/GET_NEWS_LIST';

let initialState = {
   articles: []
};

export const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_NEWS_LIST:
         return {
            ...state,
            articles: action.articles
         }
      default:
         return state;
   }
}

export const getNewsList = (articles) => ({type: SET_NEWS_LIST, articles});


//saga action creator
export const getNews = (typeOfRequest, ...titles) => ({type: GET_NEWS_LIST, typeOfRequest, titles});
