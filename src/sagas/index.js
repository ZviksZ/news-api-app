import {put, takeLatest, all, call} from 'redux-saga/effects';
import {getNewsList}          from "../redux/newsReducer.js";
import axios from "axios";

function* fetchNews(action) {
   try {
      let requestTitles = action.titles[0]
      const request = requestTitles.join('&');
      console.log(request)
      const response = yield call(axios.get, `https://newsapi.org/v2/${action.typeOfRequest}?${request}&apiKey=871fa6f8f31d4dd0a89793d18e19fd82`);

      if (response.data.status === 'ok') {
         yield put(getNewsList(response.data.articles));
      }
   } catch (e) {
      alert(e.message)
   }
}

function* fetchNewsWatcher() {
   yield takeLatest('news-app/news/GET_NEWS_LIST', fetchNews)
}

export default function* rootSaga() {
   yield all([
      fetchNewsWatcher(),
   ]);
}