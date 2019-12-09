import React              from 'react';
import {Field, reduxForm} from "redux-form";


const SearchForm = ({handleSubmit}) => {
   return (
      <form>
         <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
               <Sonnet/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
               <Sonnet/>
            </Tab>
         </Tabs>
      </form>      
   )
}

export const SearchFormRedux = reduxForm({
   form: 'search-news-form'
})(SearchForm)