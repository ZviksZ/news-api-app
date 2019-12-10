import React  from 'react';
import styles from './../ArticlesList.module.scss'

export const ArticlesItem = ({item}) => {
   return (
      <li className={`list-group-item ${styles.listItem}`}>
         {item.author} <br/>
         {item.title}
      </li>
   )
}