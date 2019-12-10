import React, {useEffect}  from 'react';
import './App.css';
import {Container}         from "react-bootstrap";
import {Navbar}            from "./components/Navbar/Navbar.jsx";
import {SearchFormRedux}   from './components/SearchForm/SearchForm.jsx';
import {connect, Provider} from "react-redux";
import {compose}           from "redux";
import {ArticlesList}      from "./components/Articles/ArticlesList.jsx";
import {getNews}           from "./redux/newsReducer.js";
import {store}             from "./redux/store.js";

const App = (props) => {
   useEffect(() => {
      props.getNews('top-headlines', 'country=ru')
   }, [])

   const onSubmitSearchForm = (values) => {
      console.log(values)

      const q = `q=${values.searchInput}`;
      
      console.log(q)
      /*props.getNews(values.searchType, 'country=ru')*/
   }


   return (
      <>
         <Navbar/>
         <Container>
            <SearchFormRedux onSubmit={onSubmitSearchForm}/>
            <ArticlesList articles={props.articles}/>

         </Container>
      </>

   );
}


let mapStateToProps = (state) => {
   return {
      articles: state.news.articles,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {getNews}),
)(App);

const NewsApp = (props) => {
   return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   )
}


export default NewsApp;
