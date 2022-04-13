import React from 'react';
import './estiloCard.css'


export default function Card(props){
    return(
        <div className='card'>
            <h5 className='card-title'>
                {props.produto}
            </h5>

            <img className='card-img-top' src={props.imagem} alt={props.produto}></img>

            <div className='card-rodape'>
                <a href='#' className='card-link'>{props.link}</a>
            </div>
        </div>
    );
}

