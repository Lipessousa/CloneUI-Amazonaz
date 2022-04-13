import React from 'react';
import './estilocarousel.css';
//import '../script_carousel/carousel.js';

export default function Carousel(props){
  return(
    <div className='center'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <a href='#'><img src={props.imagem1} className="d-block w-100" alt='Pet Shop'></img></a>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <a href='#'><img src={props.imagem2} className="d-block w-100" alt='Roupas e Acessórios'></img></a>
              </div>
              <div className="carousel-item">
                <a href='#'><img src={props.imagem3} className="d-block w-100" alt='E-books'></img></a>
              </div>
          </div>
          <div className='btns'>
            <button  id='button' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button id='button' className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>
    </div>
  );
}