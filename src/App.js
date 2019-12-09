import React, {useEffect}  from 'react';
import './App.css';
import Button              from 'react-bootstrap/Button';
import {connect, Provider} from "react-redux";
import {compose}           from "redux";
import {ArticlesList}      from "./components/Articles/ArticlesList.jsx";
import {requestNews}       from "./redux/newsReducer.js";
import {store}             from "./redux/store.js";

const App = (props) => {
   useEffect(() => {
      props.requestNews('country=ru', 'category=business')
   }, [])


   return (
      <div className="App">
         
         
         <ArticlesList articles={props.articles}/>         

      </div>
   );
}



let mapStateToProps = (state) => {
   return {
      articles: state.news.articles,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {requestNews}),
)(App);

const NewsApp = (props) => {
   return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   )
}


export default NewsApp;
