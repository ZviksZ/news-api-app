import React from 'react'

export const Navbar = () => (
   <nav className="navbar navbar-dark navbar-expand-lg bg-dark d-flex justify-content-between">
      <div className="navbar-brand">
         Новости
      </div>

      <form className="form-inline">
         <input className="form-control mr-sm-2" type="search" placeholder="Поиск среди новостей на экране" aria-label="Search" />
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
   </nav>
)