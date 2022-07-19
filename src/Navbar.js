import React from 'react'
import './App.css'

const Navbar = () => {
  
  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Contacts</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
      </ul>
      <form class="d-flex">
        
      </form>
    </div>
  </div>
</nav>
<div className='add'>
<h1>Contacts</h1>
</div>
    </div>
  )
}

export default  (Navbar)