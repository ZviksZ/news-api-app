import {put, takeLatest, all, call} from 'redux-saga/effects';
import {setNewsList, setSources}    from "../redux/newsReducer.js";
import axios                        from "axios";

const instance = axios.create({
   baseURL: 'https://newsapi.org/v2/',
   headers: {
      'X-Api-Key': '871fa6f8f31d4dd0a89793d18e19fd82'
   }
})

/*---------------------News-------------------*/

function* fetchNewsSaga(action) {
   try {
      let requestTitles = action.titles[0] || []
      
      const request = requestTitles.length > 0 ? '?' + requestTitles.join('&') : ''
      const response = yield call(instance.get, `${action.typeOfRequest}${request}`);
      
      console.log(response)
      if (response.data.status === 'ok') {
         yield put(setNewsList(response.data.articles));
      }
   } catch (e) {
      alert('Загрузка не удалась')
   }
}
function* fetchNewsWatcher() {
   yield takeLatest('news-app/news/GET_NEWS_LIST', fetchNewsSaga)
}

/*---------------------Sources-------------------*/

function* fetchSourcesSaga(action) {
   try {
      let requestTitles = action.titles[0] || []
      const request = requestTitles.length > 0 ? '?' + requestTitles.join('&') : ''
      const response = yield call(instance.get, `sources${request}`);
      if (response.data.status === 'ok') {
         yield put(setSources(response.data.sources));
      }
   } catch (e) {
      alert('Загрузка не удалась')
   }
}

function* fetchSourcesWatcher() {
   yield takeLatest('news-app/news/GET_SOURCES', fetchSourcesSaga)
}

/*---------------------Root-------------------*/

export default function* rootSaga() {
   yield all([
      fetchNewsWatcher(),
      fetchSourcesWatcher(),
   ]);
}