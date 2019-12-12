import {put, takeLatest, all, call}           from 'redux-saga/effects';
import {setFetching, setNewsList, setSources} from "../redux/newsReducer.js";
import axios                                  from "axios";
import {reset} from 'redux-form';

const instance = axios.create({
   baseURL: 'https://newsapi.org/v2/',
   headers: {
      'X-Api-Key': '871fa6f8f31d4dd0a89793d18e19fd82'
   }
})

/*---------------------News and Sources-------------------*/

function* fetchSaga(action) {
   yield put(setFetching())
   try {
      let requestTitles = action.titles[0] || []
      
      const request = requestTitles.length > 0 ? '?' + requestTitles.join('&') : ''
      const response = yield call(instance.get, `${action.typeOfRequest}${request}`);
      
      if (response.data.status === 'ok') {
         if (action.typeOfRequest === 'sources') {
            yield put(setSources(response.data.sources));
         } else {
            yield put(setNewsList(response.data.articles));
            yield put(reset('search-news-form'));
         }
         yield put(setFetching())
         
      }
   } catch (e) {
      alert('Загрузка не удалась')
   }
}
/*---------------------Root-------------------*/

export default function* rootSaga() {
   yield takeLatest('news-app/news/GET_NEWS_SOURCES_LIST', fetchSaga)
   yield takeLatest('news-app/news/GET_SOURCES', fetchSaga)
}