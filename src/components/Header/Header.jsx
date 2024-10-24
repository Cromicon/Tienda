import React from 'react'
import Icono2 from '../img/icono2.png'

export const Header = () => {
  return (
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={Icono2} alt="icono2" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Inicio</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Precios</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Sobre nosotros</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Iniciar sesion</button>
          <button type="button" class="btn btn-primary">Crear una cuenta</button>
        </div>
      </div>
    </div>
  </header>
  )
}