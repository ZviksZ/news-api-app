import React              from 'react';
import {Button}           from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import styles             from './SearchForm.module.scss'


const SearchForm = ({handleSubmit, sources}) => {

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

         <Field name="sourceSelect" component="select" className="custom-select">
            <option value={''}>Все источники</option>
            {
               
               sources.map(s => <option value={s.id}>{s.name}</option>)
            }
         </Field>

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