import React, {useEffect}    from 'react';
import './App.css';
import {Container}           from "react-bootstrap";
import {Navbar}              from "./components/Navbar/Navbar.jsx";
import {SearchFormRedux}     from './components/SearchForm/SearchForm.jsx';
import {connect, Provider}   from "react-redux";
import {compose}             from "redux";
import {ArticlesList}        from "./components/Articles/ArticlesList.jsx";
import {getNews, getSources} from "./redux/newsReducer.js";
import {store}               from "./redux/store.js";

const App = (props) => {   
   useEffect(() => {
      props.getSources()
      props.getNews('top-headlines', ['country=ru'])      
   }, [])

   const onSubmitSearchForm = (values) => {
      const typeOfRequest = values.searchType === 'top' ? 'top-headlines' : 'everything'
      const titles = []
      Object.keys(values).map(key => {
         if (key !== 'searchType') {
            if (key === 'searchInput') {
               const requestText = `q=${values[key]}`;
               titles.push(requestText)               
            } else if (key === 'sourceSelect') {
               const source = `sources=${values[key]}`;
               titles.push(source)
            } else {
               titles.push(values[key])
            }            
         }
      })
      props.getNews(typeOfRequest, titles)
   }


   return (
      <>
         <Navbar/>
         <Container>
            <SearchFormRedux onSubmit={onSubmitSearchForm} sources={props.sources}/>
            <ArticlesList articles={props.articles}/>

         </Container>
      </>

   );
}


let mapStateToProps = (state) => {
   return {
      articles: state.news.articles,
      sources: state.news.sources,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {getNews, getSources}),
)(App);

const NewsApp = (props) => {
   return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   )
}


export default NewsApp;
