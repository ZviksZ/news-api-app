import React, {useState} from 'react';
import styles            from './../ArticlesList.module.scss'

export const ArticlesItem = ({item}) => {
   const [fullMode, setFullMode] = useState(false)
   const date = new Date(item.publishedAt)
   const newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`  
   
   const toggleFullMode = () => {
      setFullMode(!fullMode)
   }
   
   return (
      <li className={`list-group-item ${styles.listItem}`}>     
         
         <div className={`${styles.front} ${fullMode ? styles.frontClk : ''}`}>
            <div className={styles.articleImg}>
               <img src={item.urlToImage} alt="Article image"/>
            </div> 
            <div className={styles.articleTitle}>
               <h4>{item.title}</h4>
               <p className={styles.articleSource}>Источник: <strong>{item.source.name}</strong></p>
               <p>{newDate}</p>
            </div>           
         </div>
         
         <div className={`${styles.back} ${fullMode ? styles.backClk : ''}`}>
            <p>{item.description}</p>
            <a href={item.url} target="_blank">
               <button className="btn btn-outline-dark btn-sm">Подробнее</button>               
            </a>
         </div>

         <button className={`${styles.fullBtn} btn btn-success`} 
                 onClick={toggleFullMode}>
            {fullMode ? 'Краткое описание' : 'Полная новость'}
         </button>
      </li>
   )
}