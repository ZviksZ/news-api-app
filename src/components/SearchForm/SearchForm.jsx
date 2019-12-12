import React, {useState}  from 'react';
import {Button}           from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import styles             from './SearchForm.module.scss'


const SearchForm = ({handleSubmit, sources}) => {
   const [checkedField, setCheckedField] = useState('')
   const countries = [];
   
   const typeClick = e => setCheckedField(e.currentTarget.value)
   
   return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>
         <div className="mb-3 mt-3">
            <h5>Выберите тип запроса</h5>
            <div className="d-flex">
               <div className="form-check mr-4">
                  <label className="form-check-label">
                     <Field name="searchType"
                            className="form-check-input"
                            component="input"
                            type="radio"
                            required
                            onClick={typeClick}
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
                            onClick={typeClick}
                            value="everything"/>{' '}
                     Все заголовки
                  </label>
               </div>
            </div>
         </div>
         <div className="form-group mb-3 mt-3">
            <h3>Введите запрос</h3>
            <Field
               name="searchInput"
               className="form-control"
               component="input"
               type="text"
               placeholder="Введите запрос, который Вас интересует"
            />
         </div>

         <div className="mb-3">
            <h5>Выберите источник</h5>
            <Field name="sourceSelect" component="select" className="custom-select">
               <option value={''}>Все источники</option>
               {
                  sources.map(s => <option key={`source${s.id}`} value={s.id}>{s.name}</option>)
               }
            </Field>
         </div>


         {
            checkedField === 'top'
               ? <div>
                  <h5>Выберите страну</h5>
                  <Field name="countrySelect" component="select" className="custom-select">
                     <option value={''}>Все страны</option>
                     {
                        sources.map(s => {
                           if (countries.indexOf(s.country) === -1) {
                              countries.push(s.country)
                           }
                        })
                     }
                     {
                        countries.length > 0 ? countries.map((c, i) => <option key={`country${i}`} value={c}>{c}</option>) : null
                     }
                  </Field>
               </div>
               :
               null
         }


         <div className="form-group mb-3 mt-3 d-flex justify-content-between">
            <div className={styles.dateItem}>
               <h5>От</h5>
               <Field
                  name="fromDate"
                  className="form-control"
                  component="input"
                  type="date"
                  placeholder="Введите запрос, который Вас интересует"
               />
            </div>
            <div className={styles.dateItem}>
               <h5>До</h5>
               <Field
                  name="toDate"
                  className="form-control"
                  component="input"
                  type="date"
                  placeholder="Введите запрос, который Вас интересует"
               />
            </div>
         </div>


         <Button type="submit" variant="success">Поиск</Button>
      </form>
   )
}

export const SearchFormRedux = reduxForm({
   form: 'search-news-form'
})(SearchForm)