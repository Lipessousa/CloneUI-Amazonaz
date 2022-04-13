import React from 'react';
import './estilocard2.css';

export default function CardsImgs(props){
    return(
        <div className='card'>
            <h5 className='card-title'>
                {props.produto}
            </h5>

            <div className='linha-images'>
                <div className='row'>
                    <div className='col'>
                        <div className='fourImages'>
                            <img className='card-img-top' src={props.imagem1} alt={props.produto}></img>
                            <p className='descProduto'>{props.desc1}</p>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='fourImages'>
                            <img className='card-img-top' src={props.imagem2} alt={props.produto}></img>
                            <p className='descProduto'>{props.desc2}</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className='fourImages'>
                            <img className='card-img-top' src={props.imagem3} alt={props.produto}></img>
                            <p className='descProduto'>{props.desc3}</p>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='fourImages'>
                            <img className='card-img-top' src={props.imagem4} alt={props.produto}></img>
                            <p className='descProduto'>{props.desc4}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rodape'>
                <a href='#' className='card-link'>{props.link}</a>
            </div>
        </div>
    );
}