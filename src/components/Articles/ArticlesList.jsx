import React          from 'react';
import {ArticlesItem} from "./ArticlesItem/ArticlesItem.jsx";
import styles         from './ArticlesList.module.scss'

export const ArticlesList = ({articles}) => {
   return (
      <ul className={styles.articlesList}>
         {            
            articles.map(m => <ArticlesItem key={m.publishedAt} item={m}/>)
         }
      </ul>
   )
}