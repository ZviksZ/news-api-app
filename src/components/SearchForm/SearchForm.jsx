import React              from 'react';
import {Button}           from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import styles             from './SearchForm.module.scss'


const SearchForm = ({handleSubmit}) => {
   
   
   return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>

         <div className="mb-3 mt-3">
            <div className="form-check">
               <label className="form-check-label">
                  <Field name="searchType"
                         className="form-check-input"
                         component="input"
                         type="radio"
                         required
                         value="top"/>{' '}
                  Топ заголовки
               </label>
            </div>
            <div className="form-check">
               <label className="form-check-label">
                  <Field name="searchType"
                         className="form-check-input"
                         component="input"
                         type="radio"
                         required
                         value="everything"/>{' '}
                  Все заголовки
               </label>
            </div>


         </div>
         <div className="form-group mb-3 mt-3">
            <Field
               name="searchInput"
               className="form-control"
               component="input"
               type="text"
               placeholder="Введите запрос, который Вас интересует"
            />
         </div>

         <div className="form-group mb-3 mt-3">
            <Field
               name="fromDate"
               className="form-control"
               component="input"
               type="date"
               placeholder="Введите запрос, который Вас интересует"
            />
            <Field
               name="toDate"
               className="form-control"
               component="input"
               type="date"
               placeholder="Введите запрос, который Вас интересует"
            />
         </div>


         <Button type="submit" variant="success">Поиск</Button>
      </form>
   )
}

export const SearchFormRedux = reduxForm({
   form: 'search-news-form'
})(SearchForm)