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
            <img src={item.urlToImage} alt="Article image" className={styles.articleImg}/>
            <h3>{item.title}</h3>
            <p>{item.author} </p>
            <p>{item.source.name}</p>
            <p>{newDate}</p>
         </div>
         <div className={`${styles.back} ${fullMode ? styles.backClk : ''}`}>
            <p>{item.description}</p>
            <a href={item.url} target="_blank">Подробнее</a>
         </div>

         <button className={`${styles.fullBtn} btn btn-outline-success`} 
                 onClick={toggleFullMode}>
            Полная новость
         </button>
      </li>
   )
}