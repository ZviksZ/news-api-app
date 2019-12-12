import React          from 'react';
import {ArticlesItem} from "./ArticlesItem/ArticlesItem.jsx";
import styles         from './ArticlesList.module.scss'

export const ArticlesList = ({articles}) => {
   return (
      articles.length > 0
         ? <ul className={`list-group ${styles.articlesList}`}>

            {articles.map(m => <ArticlesItem key={m.publishedAt} item={m}/>)}

         </ul>
         : <p className="text-center mt-5">Здесь пока ничего нет</p>
   )
}